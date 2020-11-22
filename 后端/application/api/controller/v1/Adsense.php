<?php

namespace app\api\controller\v1;

use think\Request;
use app\common\validate\AdsenseValidate;
use app\common\model\Adsense as AdsenseModel;
use app\common\controller\BaseController;

class Adsense extends BaseController
{
    // 获取广告列表
    public function index(){
        (new AdsenseValidate())->goCheck();
        $list = (new AdsenseModel)->getList();
        return self::showResCode('获取成功',['list'=>$list]);
    }
}