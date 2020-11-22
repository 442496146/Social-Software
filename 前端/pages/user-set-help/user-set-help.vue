<template>
	<view>
		<uni-collapse>
			<block v-for="(item,index) in list" :key="index">
				<uni-collapse-item :title="item.title" :show-animation="true" :contentdata="item.content"></uni-collapse-item>
			</block>
		</uni-collapse>
		<view class="body">
			<button class="user-set-btn" 
			type="primary" @tap="openFeedback">意见反馈</button>
		</view>
	</view>
</template>

<script>
	import uniCollapse from "../../components/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "../../components/uni-collapse-item/uni-collapse-item.vue"
	export default {
		components:{
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				list:[
					{
						title:"客服什么时候上线？",
						content:"你好，还在计划中，敬请期待"
					},
					{
						title:"忘记账号/昵称/密码怎么办？",
						content:"请私信联系我们哦"
					},
					{
						title:"怎么搜索/查找/关注/取关用户？",
						content:"请看使用说明哦"
					}
				]
			}
		},
		methods: {
			openFeedback(){
				uni.navigateTo({
					url: '/pages/user-feedback/user-feedback',
				});
			}
		}
	}
</script>

<style>
@import "../../common/form.css";
</style>
