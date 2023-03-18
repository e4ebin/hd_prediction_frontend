<template>
    <div class="bg-gradient-to-br from-blue-800 to-purple-600 flex flex-col items-center">
        <h5 class="font-bold text-2xl text-white mt-5 mb-5">Performance Analysis</h5>
        <h5 class="font-semibold text-gray-300 mb-5">Precision and recall</h5>
        <h5 class="font-semibold text-stone-50 mb-5">Recall Precision</h5>
        <div class="flex flex-col items-center font-semibold text-stone-100 mb-5">
            <p class="text-green-400">Instruction detection normal(0)</p>
            <p>0.95 0.94</p>
        </div>
        <div class="flex flex-col items-center font-semibold text-stone-100 mb-5">
            <p class="text-green-400">Instruction detection attack(1)</p>
            <p>0.88 0.89</p>
        </div>
        <p class="font-semibold text-yellow-300 mb-5 text-xl">Confusion Matrix</p>
        <img class="mb-10 w-80 h-80" src="../assets/chart.png" alt="">
    </div>
</template>