//
//  HTTPUtils.m
//  CrushOn
//
//  Created by Viktar-Daniil on 1/23/22.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(HTTPUtils, NSObject)

RCT_EXTERN_METHOD(configure: (NSDictionary*) options
                  resolve: (RCTPromiseResolveBlock) resolve
                  reject: (RCTPromiseRejectBlock) reject)

RCT_EXTERN_METHOD(getRequest: (NSDictionary*) options
                  resolve: (RCTPromiseResolveBlock) resolve
                  reject: (RCTPromiseRejectBlock) reject)

RCT_EXTERN_METHOD(postRequest: (NSDictionary*) options
                  resolve: (RCTPromiseResolveBlock) resolve
                  reject: (RCTPromiseRejectBlock) reject)

@end
