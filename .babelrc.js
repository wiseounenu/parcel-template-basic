module.exports = {
  presets:['@babel/preset-env'], // 문자데이터 명시
  plugins:[
    ['@babel/plugin-transform-runtime']
  ] 
}

// JS 는 바벨을 통해서 ES5 를 통해서 변경이 될것이다 
