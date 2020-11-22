<?php

namespace app\common\validate;

use app\common\validate\BaseValidate;

class UserValidate extends BaseValidate
{
    /**
     * 定义验证规则
     * 格式：'字段名'	=>	['规则1','规则2'...]
     *
     * @var array
     */	
	protected $rule = [
        'phone'=>'require|mobile',
        'code'=>'require|number|length:4|isPefectCode',
        'username'=>'require',
        'password'=>'require|alphaDash',
        'provider'=>'require',
        'openid'=>'require',
        'nickName'=>'require',
        'avatarUrl'=>'require',
        'expires_in'=>'require',
        'id'=>'require|integer|>:0',
        'page'=>'require|integer|>:0',
        'email'=>'require|email',
        'userpic'=>'image',
        'name'=>'require|chsDash',
        'sex'=>'require|in:0,1,2',
        'qg'=>'require|in:0,1,2',
        'job'=>'require|chsAlpha',
        'birthday'=>'require|dateFormat:Y-m-d',
        'path'=>'require|chsDash',
        'oldpassword'=>'require',
        'newpassword'=>'require|alphaDash',
        'renewpassword'=>'require|confirm:newpassword',
        'follow_id'=>'require|integer|>:0|isUserExist',
        'user_id'=>'require|integer|>:0'
    ];
    
    /**
     * 定义错误信息
     * 格式：'字段名.规则名'	=>	'错误信息'
     *
     * @var array
     */	
    protected $message = [
        'phone.require'=>'请填写手机号码',
        'phone.mobile'=>'手机号码不合法'
    ];

    // 配置场景
    protected $scene = [
        // 发送验证码
        'sendcode'=>['phone'],
        // 手机验证码登录
        'phonelogin'=>['phone','code'],
        // 账号密码登录
        'login'=>['username','password'],
        // 第三方登录
        'otherlogin'=>['provider','openid','nickName','avatarUrl','expires_in'],
        // 指定用户下的文章列表
        'post'=>['id','page'],
        // 指定用户下的所有文章列表
        'allpost'=>['page'],
        // 绑定手机号
        'bindphone'=>['phone','code'],
        // 'bindphone'=>['phone'],
        // 绑定邮箱
        'bindemail'=>['email'],
        // 绑定第三方
        'bindother'=>['provider','openid','nickName','avatarUrl'],
        // 修改头像
        'edituserpic'=>['userpic'],
        // 修改资料
        'edituserinfo'=>['name','sex','qg','job','birthday','path'],
        // 修改密码
        'repassword'=>['oldpassword','newpassword','renewpassword'],
        // 关注用户
        'follow'=>['follow_id'],
        // 取消关注
        'unfollow'=>['follow_id'],
        // 互关列表
        'getfriends'=>['page'],
        // 粉丝列表
        'getfens'=>['page'],
        // 关注列表
        'getfollows'=>['page'],
        // 用户信息
        'getuserinfo'=>['user_id']
    ];
}
