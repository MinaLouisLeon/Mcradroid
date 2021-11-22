//mcradroid reducer

export const actionSetPageUrl = (args) => {
    return{
        type : "setPageUrl",
        payload : args
    }
}

export const actionOpenApp = (appId,index) => {
    return{
        type : 'openApp',
        appId : appId,
        index : index
    }
}

export const actionCloseApp = (index) => {
    return{
        type : 'closeApp',
        index : index
    }
}

export const actionAppGetFocus = (index,appId) => {
    return{
        type : 'appGetFocus',
        index : index,
        appId : appId
    }
}

export const actionMaxApp = (index) => {
    return{
        type : 'maxApp',
        index : index
    }
}