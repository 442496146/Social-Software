<?php

namespace app\common\controller;

use think\Controller;
use think\Request;

class BaseController extends Controller
{
    // api统一返回数据结果格式
    static public function showResCode($msg='', $data = [], $code=200)
    {
        $res = [
            'msg'=> $msg ? $msg:'未定义消息',
            'data'=> $data ? $data:[]
        ];
        return json($res,$code);
    }

    // api统一返回无数据结果格式
    static public function showResCodeWithOutData($msg='',$code=200){
        return self::showResCode($msg,[],$code);
    }
}
