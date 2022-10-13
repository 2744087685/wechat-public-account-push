/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa856747d37d53df5',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '9d201871c3ed34faccbdd801ed6900a7',

  PROVINCE: '山西',
  CITY: '太原',

  USERS: [
    {
      // 想要发送的人的名字
      name: '友友们',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oY4Tm5j2U34ri_3Vo0rubG-Wfx8A',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'zelJ9qFwIAIdsTlSbLZjz_8NUcjs5NpWE8-GrO8QmLk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      // 我们在一起已经有xxxx天了的配置
      
        // 结婚纪念日
        
      
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '月月',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'l0IZoTpmioLmeklj9AdCs7Xnh9L8JzonTLYGLDC583o',
    }
  ],

}

module.exports = USER_CONFIG

