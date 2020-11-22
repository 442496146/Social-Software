<?php

namespace app\common\controller;

// 引入阿里SDK
use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;
// 引入异常类
use app\lib\exception\BaseException;

class AliSMSController
{
   static public function sendSMS($phone,$code)
   {
        AlibabaCloud::accessKeyClient(config('api.aliSMS.accessKeyId'), config('api.aliSMS.accessSecret'))
            ->regionId(config('api.aliSMS.regionId'))
            ->asDefaultClient();

        try {
            $option = [
                'query' => [
                'RegionId' => config('api.aliSMS.regionId'),
                'PhoneNumbers' => $phone,
                'SignName' => config('api.aliSMS.SignName'),
                'TemplateCode' => config('api.aliSMS.TemplateCode'),
                'TemplateParam' => "{\"code\":'.$code.'}",
                ],
            ];
            $result = AlibabaCloud::rpc()
                ->product(config('api.aliSMS.product'))
                // ->scheme('https') // https | http
                ->version(config('api.aliSMS.version'))
                ->action('SendSms')
                ->method('POST')
                ->host('dysmsapi.aliyuncs.com')
                ->options($option)
                ->request();
            // print_r($result->toArray());
            return $result->toArray();
        } catch (ClientException $e) {
            throw new BaseException([
                'code'=>200,
                'msg'=>$e->getErrorMessage(),
                'errorCode'=>30000
            ]);
        } catch (ServerException $e) {
            throw new BaseException([
                'code'=>200,
                'msg'=>$e->getErrorMessage(),
                'errorCode'=>30000
            ]);
        }
   }
}
