//
//  HTTPUtils.swift
//  CrushOn
//
//  Created by Viktar-Daniil on 1/23/22.
//

import Foundation
import Alamofire

let ERROR_DOMAIN = "com.lonelyastronaut.crushon"

@objc(HTTPUtils)
class HTTPUtils: NSObject {
  private var baseURL: String = ""
  private var headers: HTTPHeaders = HTTPHeaders([])
  
  @objc(configure:resolve:reject:)
  func configure(options: NSDictionary, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
    guard let baseURL = options["baseURL"] as? String else {
      reject("1", "No baseURL specified", NSError(domain: ERROR_DOMAIN, code: 1))
      
      return
    }
    
    guard let headers = options["headers"] as? [String: String] else {
      reject("1", "No headers specified", NSError(domain: ERROR_DOMAIN, code: 1))
      
      return
    }
    
    var AFHeaders: [HTTPHeader] = []
    
    headers.forEach { key, value in
      AFHeaders.append(HTTPHeader(name: key, value: value))
    }
    
    self.headers = HTTPHeaders(AFHeaders)
    self.baseURL = baseURL
    
    resolve("OK")
  }
  
  @objc(getRequest:resolve:reject:)
  func getRequest(options: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    guard let endpoint = options["endpoint"] as? String else {
      reject("1", "No endpoint specified", NSError(domain: ERROR_DOMAIN, code: 1))
      
      return
    }
    
    AF.request(self.baseURL + endpoint,
               method: .get,
               encoding: JSONEncoding.default,
               headers: self.headers
    ).responseJSON { response in
      do {
        let data = try response.result.get()
        
        resolve([
          "status": response.response?.statusCode,
          "data": data
        ])
      } catch {
        reject("2", "Network error", NSError(domain: ERROR_DOMAIN, code: 1))
      }
    }
  }
  
  @objc(postRequest:resolve:reject:)
  func postRequest(options: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    guard let endpoint = options["endpoint"] as? String else {
      reject("1", "No endpoint specified", NSError(domain: ERROR_DOMAIN, code: 1))
      
      return
    }
    
    guard let data = options["data"] as? NSDictionary else {
      reject("1", "No data specified", NSError(domain: ERROR_DOMAIN, code: 1))
      
      return
    }
    
    AF.request(self.baseURL + endpoint,
               method: .post,
               parameters: data as? Dictionary<String, Any>,
               encoding: JSONEncoding.default,
               headers: self.headers
    ).responseJSON { response in
      do {
        let data = try response.result.get()
        
        resolve([
          "status": response.response?.statusCode,
          "data": data
        ])
      } catch {
        reject("2", "Network error", NSError(domain: ERROR_DOMAIN, code: 1))
      }
    }
  }
}
