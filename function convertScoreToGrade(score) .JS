function convertScoreToGrade(score) {
  score = [];
  x = score;
  if(x >= 90 && x <= 100){
  return "A";
  } else if(x >= 80 && x <= 89){
  return "B";
  } else if(x >= 70 && x <= 79){
  return "C";
} else if(x >= 60 && x <= 69){
return "D";
} else if(x >= 0 && x <= 59){
return "F";
} else {
	return "PUNTUACION INVALIDA"
}
}
//convertScoreToGrade(80)

module.exports = convertScoreToGrade;


