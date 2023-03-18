<script setup>
import axios from 'axios'
import { ref } from 'vue'

var data=ref("")
var showData=ref(false)
var loading=ref(false)
const url='https://hd-fastapi.onrender.com/predict';

const format={"age":"","sex":"10","chest_pain":"10","trestbps":"",
    "chol":"","fbs":"10","restecg":"10","thalach":"","exang":"10",
    "oldpeak":"","slope":"10","ca":"10","thal":"10"}
var formData=ref({ ...format })

const fetchIt=()=>{
  loading.value=!loading.value
  axios.post(url,formData.value)
  .then(response =>{
    loading.value=!loading.value
    data.value=response.data.res
    showData.value=true
  })
  .catch(err=>{
    alert(`Something went wrong!.refresh the page and try again Error:${err}`)
  })
}

const validate=()=>{
  var notFilled="";
  showData.value=false;
  Object.keys(format).forEach(e=>{
    if(formData.value[e]===format[e]){
      notFilled+=`${e} `
    }
  })
  if(notFilled){
    window.alert(`Please fill the below form values to proceed " ${notFilled}"`)
  }else{
    fetchIt()
  }
}
</script>

<template>
    <div class="w-full">
      <div class="flex flex-col bg-gradient-to-br from-fuchsia-600 to-pink-600 md:h-screen h-auto md:max-h-[850px]">
        <div class="flex md:flex-row flex-col items-center justify-around md:mt-1 mt-10 justify-items-center">
          <img class="md:h-[650px] h-[350px] md:mt-1 -mt-10" src="../assets/dr2.png" alt="">
          <div class="font-bold text-white md:text-3xl md:w-[750px] text-xl min-w-[340px] md:p-2 p-5 md:text-left text-center mb-10">
            <h5>Please Fill The Below Required Details To Get The Prediction.The Prediction Is Based On Random Forest Algorithm</h5>
          </div>
        </div>
      </div>
      <div>
      <div class="h-auto bg-gradient-to-br from-indigo-300 to-purple-400">
        <div class="flex flex-col items-center w-full h-full">
            <div class="md:w-5/6 h-auto max-w-[1250px] w-[95%]">
                <form @submit.prevent class="flex flex-col items-center pt-5 mb-10">
                    <input min=1 v-model="formData.age" class="md:w-4/5 w-11/12 mb-3 pl-3 py-1.5 rounded-sm border focus:outline-none border-gray-400  placeholder-gray-500" type="number" placeholder="Enter your age">
                    <select v-model="formData.sex" id="gender" class="md:w-4/5 w-11/12 mb-3 pl-3 py-1.5 rounded-sm border focus:outline-none border-gray-400 bg-white text-gray-500">
                      <option selected value="10">Select Gender</option>
                      <option value="1">Male</option>
                      <option value="0">Female</option>
                    </select>
                    <select v-model="formData.chest_pain" id="cp" class="md:w-4/5 w-11/12 mb-3 pl-3 py-1.5 rounded-sm border focus:outline-none border-gray-400 bg-white text-gray-500">
                      <option selected value="10">Select your chest pain type</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    <input min=0 v-model="formData.trestbps" class="placeholder-gray-500 md:w-4/5 w-11/12 mb-3 pl-3 py-1.5 rounded-sm border focus:outline-none border-gray-400" type="number" placeholder="Enter your resting blood pressure">
                    <input min=0 v-model="formData.chol" class="placeholder-gray-500 md:w-4/5 w-11/12 mb-3 pl-3 py-1.5 rounded-sm border focus:outline-none border-gray-400" type="number" placeholder="Enter your serum cholesterol level">
                    <select v-model="formData.fbs" id="fbs" class="md:w-4/5 w-11/12 mb-3 pl-3 py-1.5 rounded-sm border focus:outline-none border-gray-400 bg-white text-gray-500">
                      <option selected value="10">Select your fasting blood sugar level</option>
                      <option value="0">less than or equal to 120 mg/dl</option>
                      <option value="1">greater than 120 mg/dl</option>
                    </select>
                    <select v-model="formData.restecg" id="restecg" class="md:w-4/5 w-11/12 mb-3 pl-3 md:py-1.5 rounded-sm border focus:outline-none border-gray-400 bg-white text-gray-500 md:text-md text-sm py-2">
                      <option selected value="10">Select your resting electrocardiographic result</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                    <input min=0 v-model="formData.thalach" class="placeholder-gray-500 md:w-4/5 w-11/12 mb-3 pl-3 py-1.5 rounded-sm border focus:outline-none border-gray-400" type="number" placeholder="Enter your Maximum heart rate achieved">
                    <select v-model="formData.exang" id="exang" class="md:w-4/5 w-11/12 mb-3 pl-3 py-1.5 rounded-sm border focus:outline-none border-gray-400 bg-white text-gray-500">
                      <option selected value="10">Do you have exercise induced angia</option>
                      <option value="1">yes</option>
                      <option value="0">no</option>
                    </select>
                    <input min=0 v-model="formData.oldpeak" class="placeholder-gray-500 md:w-4/5 w-11/12 mb-3 pl-3 md:py-1.5 rounded-sm border focus:outline-none border-gray-400 md:text-md text-sm py-2" type="number" placeholder="Enter your ST depression induced by exercise relative to rest">
                    <select v-model="formData.slope" id="slope" class="md:w-4/5 w-11/12 mb-3 pl-3 md:py-1.5 rounded-sm border focus:outline-none border-gray-400 bg-white text-gray-500 md:text-md text-sm py-2">
                      <option selected value="10">Select slope of the peak exercise ST segment</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <select v-model="formData.ca" id="ca" class="md:w-4/5 w-11/12 mb-3 pl-3 py-1.5 rounded-sm border focus:outline-none border-gray-400 bg-white text-gray-500">
                      <option selected value="10">Select number of vessels colored by fluoroscopy</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <select v-model="formData.thal" id="thal" class="md:w-4/5 w-11/12 mb-3 pl-3 py-1.5 rounded-sm border focus:outline-none border-gray-400 bg-white text-gray-500">
                      <option selected value="10">Select type of thalassemia</option>
                      <option value="3">Normal</option>
                      <option value="6">Fixed defect</option>
                      <option value="7">Reversible defect</option>
                    </select>
                    <button v-if="loading==false" @click="validate" class="bg-black md:w-4/5 w-11/12 mb-3 pl-3 py-3 rounded-full mt-3 text-white font-bold text-lg">
                      Predict
                    </button>
                    <button v-else class="bg-black md:w-4/5 w-11/12 mb-3 pl-3 py-3 rounded-full mt-3 text-white font-bold text-lg">
                      <div class="flex items-center justify-center">
                        <div class="inline-block border-white h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        </div>
                      </div>
                    </button>
                  </form>
            </div>
        </div>
        <div v-if="showData==true" class="flex flex-row items-center justify-center pb-10">
        <div class="flex flex-col bg-white flex flex-col items-center justify-center rounded-sm shadow-2xl md:m-1 m-4 p-1">
          <div v-if="data==0" class="flex flex-col items-center justify-center">
            <img class="h-12 m-3" src="../assets/popper.png" alt="">
            <h5 class="font-bold md:w-4/5 w-11/12 mb-3 pl-3 py-1.5">Congrats, You are Unlikely to get heart Disease</h5>
          </div>
          <div v-if="data==1" class="flex flex-col items-center justify-center">
            <img class="h-12 m-3" src="../assets/doctor.png" alt="">
            <h5 class="font-semibold md:w-4/5 w-11/12 mb-3 pl-3 py-1.5">You are likely to get heart Disease <span class="font-bold">Don't worry consult a Doctor and you are good to go</span></h5>
            <a href="https://www.google.com/maps/search/?api=1&query=hospitals+near+me">
              <button class="bg-purple-700 text-xs font-semibold text-white py-2 px-3 mb-3 mt-2 rounded-full shadow-2xl">
                Find a doctor near me
              </button>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>