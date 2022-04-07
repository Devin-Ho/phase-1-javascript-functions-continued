// code your solution here
function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork (choose = "go to the office"){
    return (`This Monday, I will ${choose}.`);
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(special = "*"){
    return function (type = "a hard worker"){
        return `You are ${special}${type}${special}!`;
    }
}
wrapAdjective();
wrapAdjective("||")("a dedicated programmer");