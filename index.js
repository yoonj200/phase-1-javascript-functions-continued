// code your solution here

//uses default activity 'roller-skate' when no arguments are passed
function saturdayFun(activity = `roller-skate`) { 
    return `This Saturday, I want to ${activity}!`;
} // permits the default activity to be overriden

//uses the default activity 'go to the office' when no arguments are passed
function mondayWork(activity = `go to the office`) {
    return `This Monday, I will ${activity}.`;
} // permits the default activity to be overriden

//when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
//when initialized with '||' creates a function that, when called, wraps an adjective in a highlight

function wrapAdjective(str=`*`) {
    return function (name = `special`) {
        return `You are ${str}${name}${str}!`
    }
}