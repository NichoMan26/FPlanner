// const SET_APP_STATE = 'SET_APP_STATE'
// const SET_STATE_INIT = 'SET_STATE_INIT'
// const SET_APP_MODE = 'SET_APP_MODE'
// const ADD_CURRENT_BLOCK = 'ADD_CURRENT_BLOCK'
// const UPDATE_SCORE = 'UPDATE_SCORE'
// const ADD_WRONG_WORD = 'ADD_WRONG_WORD'
// // const DELETE_WORD_FROM_ARR_WORDS = 'DELETE_WORD_FROM_ARR_WORDS'

// ///////********************/////////////
// let initState = {
//     isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
//     words: [],
//     wordsLength:0,
//     appRun:false,
//     arrWrong:[],
//     appState:'init',//init, start, begin, finish, result
//     mode:null,
//     score: 0,
//     useHelp:false,
// }
// const appReducer = (state = initState, action) => {
//     console.log('action: ', action.type);
//     switch(action.type){

//         case SET_APP_STATE:// init state
//             return {...state, appState:action.appState?action.appState:'init'}
//         case SET_STATE_INIT:// stay firstly state
//             return {...state, ...initState, appState:'start'}
//         case SET_APP_MODE: // Set App mode
//             return {...state, mode:action.appMode}
//         case ADD_CURRENT_BLOCK: // Init block how's was chessen by user
//             return {...state, words:action.currentWords, wordsLength:action.currentWords.words.length}
//         case ADD_CURRENT_BLOCK: // Init block how's was chessen by user
//             return {...state, words:action.currentWords, wordsLength:action.currentWords.words.length}
//         case UPDATE_SCORE: // change count score
//             return {...state, score:action.score}
//         case ADD_WRONG_WORD: // change count score
//             return {...state, arrWrong:[...state.arrWrong, action.objWords]}
//         // case DELETE_WORD_FROM_ARR_WORDS: // Dellete word from array if this word was executed
//         //     return {...state, words:{...state.words, words:[...state.words.words.filter((w,idx)=>{
//         //         if (idx !== action.wordNumber)  return w
//         //     })]}}
//         default:
//             return state
//     }
// }
// export const setAppState = (appState) => ({type:SET_APP_STATE, appState})
// export const setStateInit = () => ({type:SET_STATE_INIT})
// export const setAppMode = (appMode) => ({type:SET_APP_MODE, appMode})
// export const addCurrentWords = (currentWords) => ({type:ADD_CURRENT_BLOCK, currentWords})
// export const updateScore = (score) => ({type:UPDATE_SCORE, score})
// export const addWrongWord = (objWords) => ({type:ADD_WRONG_WORD, objWords})
// // export const deleteExecutedWord = (wordNumber) => ({type:DELETE_WORD_FROM_ARR_WORDS, wordNumber})
// export default appReducer 