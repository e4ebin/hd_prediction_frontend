<template>
  <div class="w-full">
    <div class="flex flex-col bg-gradient-to-br from-purple-800 to-purple-500 md:h-screen h-auto md:max-h-[850px] justify-center">
        <div class="flex md:flex-row flex-col items-center justify-around md:mt-1 mt-10 justify-items-center">
          <img class="md:h-[550px] h-[250px] md:mt-1" src="../assets/heart.png" alt="">
          <div class="font-bold text-white md:text-3xl md:w-[750px] text-xl min-w-[340px] md:p-2 p-5 md:text-left text-center mb-10">
            <h5>Predict Heart Disease with Artificial Intelligence Model Trained with Real Heart Disease Patient Data Around the World</h5>
            <p class="text-sm font-semibold text-gray-300 mt-4">No Signup required</p>
            <div class="mt-4 flex lg:flex-row flex-col">
              <router-link to="/predict" class="w-full md:w-fit">
                <button class="md:w-fit w-full text-sm bg-black px-5 py-2 rounded-sm border-2 border-black hover:bg-transparent hover:border-white">Predict Now</button>
              </router-link>
              <router-link to="/performance" class="w-full md:w-fit">
                <button class="md:w-fit w-full md:ml-2 md:mt-0 ml-0 mt-3 text-sm px-4 py-2 rounded-sm border-2 border-white bg-white text-black hover:bg-transparent hover:text-white">Performance</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>