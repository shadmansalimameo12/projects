const myMark = 80;
const friendMark = 10;

if ( myMark >= 80){
    if(friendMark > 80 ){
        console.log('go to launch and celebrate');
    }
    else if((friendMark < 80) && friendMark >= 60){
        console.log('good luck next time');
    }
    else if ((friendMark < 60) && friendMark >= 40){
        console.log('keep your friends message unseen');

    }
    else if( friendMark < 40){
        console.log('block him');
    }
}
else {
    console.log('go to home and sleep and act sad');
}