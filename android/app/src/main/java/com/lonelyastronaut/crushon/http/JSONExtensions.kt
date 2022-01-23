package com.lonelyastronaut.crushon.http

import com.facebook.react.bridge.*
import org.json.JSONArray
import org.json.JSONObject
import com.facebook.react.bridge.ReadableType
import java.lang.Exception
import com.facebook.react.bridge.ReadableMapKeySetIterator

fun JSONObject.toWritableMap(): WritableMap {
    val writableMap = Arguments.createMap()
    val iterator: Iterator<*> = this.keys()

    while (iterator.hasNext()) {
        val key = iterator.next() as String
        val value: Any = this.get(key)
        if (value is Float || value is Double) {
            writableMap.putDouble(key, this.getDouble(key))
        } else if (value is Number) {
            writableMap.putInt(key, this.getInt(key))
        } else if (value is String) {
            writableMap.putString(key, this.getString(key))
        } else if (value is JSONObject) {
            writableMap.putMap(key, this.getJSONObject(key).toWritableMap())
        } else if (value is JSONArray) {
            writableMap.putArray(key, this.getJSONArray(key).toWritableArray())
        } else if (value === JSONObject.NULL) {
            writableMap.putNull(key)
        }
    }

    return writableMap
}

fun JSONArray.toWritableArray(): WritableArray {
    val writableArray = Arguments.createArray()

    for (i in 0 until this.length()) {
        val value: Any = this.get(i)
        if (value is Float || value is Double) {
            writableArray.pushDouble(this.getDouble(i))
        } else if (value is Number) {
            writableArray.pushInt(this.getInt(i))
        } else if (value is String) {
            writableArray.pushString(this.getString(i))
        } else if (value is JSONObject) {
            writableArray.pushMap(this.getJSONObject(i).toWritableMap())
        } else if (value is JSONArray) {
            writableArray.pushArray(this.getJSONArray(i).toWritableArray())
        } else if (value === JSONObject.NULL) {
            writableArray.pushNull()
        }
    }
    return writableArray
}

fun ReadableMap.toJSONObject(): JSONObject {
    val jsonObject = JSONObject()
    val iterator: ReadableMapKeySetIterator = this.keySetIterator()

    while (iterator.hasNextKey()) {
        val key = iterator.nextKey()

        when (this.getType(key)) {
            ReadableType.Null -> jsonObject.put(key, JSONObject.NULL)
            ReadableType.Boolean -> jsonObject.put(key, this.getBoolean(key))
            ReadableType.Number -> try {
                jsonObject.put(key, this.getInt(key))
            } catch (e: Exception) {
                jsonObject.put(key, this.getDouble(key))
            }
            ReadableType.String -> jsonObject.put(key, this.getString(key))
            ReadableType.Map -> jsonObject.put(key, this.getMap(key)?.toJSONObject())
            ReadableType.Array -> jsonObject.put(key, this.getArray(key)?.toJSONArray())
        }
    }

    return jsonObject
}

fun ReadableArray.toJSONArray(): JSONArray {
    val jsonArray = JSONArray()

    for (i in 0 until this.size()) {

        when (this.getType(i)) {
            ReadableType.Null -> jsonArray.put(JSONObject.NULL)
            ReadableType.Boolean -> jsonArray.put(this.getBoolean(i))
            ReadableType.Number -> try {
                jsonArray.put(this.getInt(i))
            } catch (e: Exception) {
                jsonArray.put(this.getDouble(i))
            }
            ReadableType.String -> jsonArray.put(this.getString(i))
            ReadableType.Map -> jsonArray.put(this.getMap(i).toJSONObject())
            ReadableType.Array -> jsonArray.put(this.getArray(i).toJSONArray())
        }
    }

    return jsonArray
}