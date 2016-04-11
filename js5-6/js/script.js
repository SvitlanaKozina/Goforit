var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var clearBtn = document.getElementById('clear');

var watch = new Stopwatch(timer);

function start() {
watch.start();
toggleBtn.innerHTML = 'Pause'};

function stop() {
watch.stop();
toggleBtn.innerHTML = 'Continue'};

toggleBtn.addEventListener('click', function() {
(watch.isOn) ? stop() : start()});

clearBtn.addEventListener('click', function() {
watch.reset()});

function Stopwatch(elem) {
var time = 0;
var interval;
var offset;
this.isOn = false;

function update() {
if (this.isOn) {
var timePassed = delta();
time += timePassed}
var formattedTime = timeFormatter(time);
elem.innerHTML = formattedTime};

function delta() {
var now = Date.now();
var timePassed = now - offset;
offset = now;
return timePassed};

function timeFormatter(timeInMilliseconds) {
var time = new Date(timeInMilliseconds);
var hours = Math.floor(time.getMinutes()/60).toString();
var minutes = time.getMinutes().toString();
var seconds = time.getSeconds().toString();
if (hours.length < 2) {
hours = '0' + hours};
if (minutes.length < 2) {
minutes = '0' + minutes};
if (seconds.length < 2) {
seconds = '0' + seconds};
return hours + ' : ' + minutes + ' : ' + seconds};

this.start = function() {
if (!this.isOn) {
interval = setInterval(update.bind(this), 10);
offset = Date.now();
this.isOn = true}};

this.stop = function() {
if (this.isOn) {
clearInterval(interval);
interval = null;
this.isOn = false}};

this.reset = function() {
stop();
time = 0;
update();
toggleBtn.innerHTML = 'Start'}}
