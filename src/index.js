// Deliverable One

// form and inputs
const profileForm = document.querySelector('#profile-form')
const profileNameInput = document.querySelector('#profile-name-input')
const profileDescriptionInput = document.querySelector('#profile-description-input')

// where the info goes
const profileName = document.querySelector('#profile-name')
const profileDescription = document.querySelector('#profile-description')

// we do stuff
profileForm.addEventListener('submit', event => {
  event.preventDefault()
  profileName.textContent = profileNameInput.value
  profileDescription.textContent = profileDescriptionInput.value
})

// Deliverable Two

const activityForm = document.querySelector('#activity-form')
const activitiesContainer = document.querySelector('#activities-container')
const activityInput = document.querySelector('#activity-input')

activityForm.addEventListener('submit', event => {
  event.preventDefault()
  const p = document.createElement('p')
  p.textContent = activityInput.value
  activitiesContainer.append(p)
})

// Deliverable Three

let counter = 1

const coolPoints = document.querySelector('#cool-points')
const coolPointsForm = document.querySelector('#cool-points-form')
const coolPointsAdd = document.querySelector('#cool-points-add')

coolPointsForm.addEventListener('submit', event => {
  event.preventDefault()
  counter = parseInt(coolPointsAdd.value) + counter
  coolPoints.textContent = counter
})

// Deliverable Four

const coolMultiplierForm = document.querySelector('#cool-multiplier-form')
const coolPointsMultiplier = document.querySelector('#cool-points-multiplier')

coolMultiplierForm.addEventListener('submit', event => {
  event.preventDefault()
  counter = parseInt(coolPointsMultiplier.value) * counter
  coolPoints.textContent = counter
})

// Deliverable Five

const pictureContainer = document.querySelector('#pictures-container')
const pictureForm = document.querySelector('#picture-form')
const pictureInput = document.querySelector('#picture-input')

pictureForm.addEventListener('submit', event => {
  event.preventDefault()
  const newImg = document.createElement('img')
  newImg.src = pictureInput.value
  pictureContainer.append(newImg)
})
