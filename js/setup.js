'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardTemplate = document.querySelector('#similar-wizard-template');
var similarList = document.querySelector('.setup-similar-list');

var makeMag = function (fNames, sNames, coatColors, eyesColors) {
  var randomWizard = {
    name: fNames[Math.floor(Math.random() * fNames.length)] + ' ' + sNames[Math.floor(Math.random() * sNames.length)],
    coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)]
  };
  return randomWizard;
};

var similarWizards = [];
for (var i = 0; i <= 3; i++) {
  similarWizards.push(makeMag(firstNames, secondNames, coats, eyes));
}

var renderWizard = function (wizard) {
  var elementWizard = wizardTemplate.content.querySelector('.setup-similar-item').cloneNode(true);
  elementWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  elementWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  elementWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return elementWizard;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < similarWizards.length; i++) {
  fragment.appendChild(renderWizard(similarWizards[i]));
}
similarList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
