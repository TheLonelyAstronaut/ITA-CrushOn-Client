package com.lonelyastronaut.crushon.http

import com.facebook.react.bridge.*
import kotlinx.coroutines.*
import okhttp3.*
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import org.json.JSONArray
import org.json.JSONObject

class HTTPUtilsModule(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    private lateinit var client: OkHttpClient
    private lateinit var baseURL: String

    override fun getName() = "HTTPUtils"

    @ReactMethod
    fun configure(params: ReadableMap, promise: Promise) {
        val baseURL = params.getString("baseURL")
        val headers = params.getMap("headers")?.toHashMap()

        if(headers == null || baseURL == null) {
            promise.reject("1", "No baseURL or headers provided")
            return
        }


        this.baseURL = baseURL

        client = OkHttpClient()
            .newBuilder()
            .addInterceptor {
                val requestBuilder = it.request().newBuilder()

                headers.forEach { header ->
                    requestBuilder
                        .addHeader(header.key, header.value.toString())
                }

                it.proceed(requestBuilder.build())
            }
            .build()

        promise.resolve("OK")
    }

    @ReactMethod
    fun getRequest(params: ReadableMap, promise: Promise) {
        val endpoint = params.getString("endpoint")

        if(endpoint == null) {
            promise.reject("1", "No endpoint provided")
            return
        }

        val request = Request.Builder()
            .url(this.baseURL + endpoint)
            .get()
            .build()

        runBlocking {
            withContext(Dispatchers.IO) {
                val response = client.newCall(request).execute()

                if(response.body == null) {
                    promise.reject("2", "Network error")
                    return@withContext
                }

                val responseString = response.body!!.string()

                if(responseString[0] == '[') {
                    val jsonObj = JSONArray(responseString)
                    val responseMap = Arguments.createMap()

                    responseMap.putInt("status", response.code)
                    responseMap.putArray("data", jsonObj.toWritableArray())

                    promise.resolve(responseMap)
                } else {
                    val jsonObj = JSONObject(responseString)
                    val responseMap = Arguments.createMap()

                    responseMap.putInt("status", response.code)
                    responseMap.putMap("data", jsonObj.toWritableMap())

                    promise.resolve(responseMap)
                }
            }
        }
    }

    @ReactMethod
    fun postRequest(params: ReadableMap, promise: Promise) {
        val endpoint = params.getString("endpoint") ?: ""
        val data = params.getMap("data")?.toJSONObject()

        val request = Request.Builder()
            .url(this.baseURL + endpoint)
            .post(RequestBody.create("application/json; charset=utf-8".toMediaTypeOrNull(), data.toString()))
            .build()

        runBlocking {
            withContext(Dispatchers.IO) {
                val response = client.newCall(request).execute()

                if(response.body == null) {
                    promise.reject("2", "Network error")
                    return@withContext
                }

                val responseString = response.body!!.string()

                if(responseString[0] == '[') {
                    val jsonObj = JSONArray(responseString)
                    val responseMap = Arguments.createMap()

                    responseMap.putInt("status", response.code)
                    responseMap.putArray("data", jsonObj.toWritableArray())

                    promise.resolve(responseMap)
                } else {
                    val jsonObj = JSONObject(responseString)
                    val responseMap = Arguments.createMap()

                    responseMap.putInt("status", response.code)
                    responseMap.putMap("data", jsonObj.toWritableMap())

                    promise.resolve(responseMap)
                }
            }
        }
    }
}