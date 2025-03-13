const base = {
    get() {
        return {
            url : "http://localhost:8080/xueshengwangshangxuanke/",
            name: "xueshengwangshangxuanke",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xueshengwangshangxuanke/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生网上选课系统"
        } 
    }
}
export default base
