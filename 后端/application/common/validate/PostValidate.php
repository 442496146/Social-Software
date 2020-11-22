<?php

namespace app\common\validate;

use app\common\validate\BaseValidate;

class PostValidate extends BaseValidate
{
    /**
     * 定义验证规则
     * 格式：'字段名'	=>	['规则1','规则2'...]
     *
     * @var array
     */	
	protected $rule = [
        'text'=>'require',
        'imglist'=>'require',
        'isopen'=>'require|in:0,1',
        'topic_id'=>'require|integer|isTopicExist',
        'post_class_id'=>'require|integer|>:0|isPostClassExist',
        'id'=>'require|integer|>:0',
        'page'=>'require|integer|>:0'
    ];
    
    /**
     * 定义错误信息
     * 格式：'字段名.规则名'	=>	'错误信息'
     *
     * @var array
     */	
    protected $message = [];

    // 场景
    protected $scene = [
        'create'=>['text','imglist','token','isopen','topic_id','post_class_id'],
        'detail'=>['id'],
        'list'=>['page']
    ];
}
