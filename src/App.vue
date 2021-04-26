<template>
      <!-- Barra Nav -->
  <header class="lg:px-8 px-6 bg-woodsmoke-500 items-center py-1 fixed w-screen">
      
      <div class="flex h-full items-center justify-center sm:items-stretch sm:justify-start">


      <!-- Logo del Header -->
        
        <div class="flex-grow flex items-center">
          <img src="./img/SIMBOLO1.png" alt="LOGO" class="h-12 w-25 ml-0">
        </div>

      <!-- Contenido del Nav -->
      
        <div class="flex-none hidden sm:block sm:ml-6 font-oswald">
          <div class="flex space-x-4">
            <a href="#" class="text-white hover:bg-white hover:text-black px-3 py-3 rounded-sm text-base font-extralight lg:text-2xl" aria-current="page">Production</a>

            <a href="#" class="text-white hover:bg-white hover:text-black px-3 py-3 rounded-sm text-base font-extralight lg:text-2xl">About me</a>

            <a href="#" class="text-white hover:bg-white hover:text-black px-3 py-3 rounded-sm text-base font-extralight lg:text-2xl">Pricing</a>

            <a href="#" class="text-wheat-500 hover:bg-wheat-500 hover:text-black px-3 py-3 rounded-sm text-base font-extralight lg:text-2xl italic">Make a Project</a>
          </div>
       
        </div>
      <!-- Togglo de Nav -->

        <div class="visible lg:hidden md:hidden pt-1.5 flex-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        </div>

      </div>
  </header>

      <!-- Foto Header  -->

     <div class="w-full h-full bg-woodsmoke-500 overflow-y-auto ">

             <div id="slider-1" class="mx-auto imgHead">

                <div class="flex justify-between bg-cover bg-center h-full text-white py-24 px-10 object-fill" style="background-image: url(/img/image2.jpeg)">
                  
                <!-- Slider Icons -->

                  <div class="flex flex-wrap  justify-start content-center md:w-1/3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 hover:text-wheat-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                </div>  
                <div class="flex flex-wrap  justify-end content-center md:w-1/3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 hover:text-wheat-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div> 

            </div> 
             </div>
               
          <div class="flex flex-wrap my-20 justify-around font-oswald mt-4">
              <!-- Cuadro 1 Oriana -->
          <div class="mb-10">
            <div class="w-96 my-2 mb-10 bg-woodsmoke-500 h-42 text-white md:mt-10 lg:mt-24">
                <div class=" mb-8 p-3 ">
                  <div class="font-bold text-3xl mb-4 uppercase">Voices Recording</div>
                  <p class="text-xl font-thin italic">Very high voice recording quality with second and third voices in the project. </p>
                </div>
            </div>

            <div class="max-w-sm my-4 bg-white w-full md:mb-2">
                <div class="imgSize flex-none bg-cover  overflow-hidden" style="background-image: url('/img/oriana.jpg')"></div>
                <div class="mb-8 p-3">
                  <div class="text-gray-900 font-bold text-2xl mb-2">Gudnana </div>
                  <p class="text-black text-xl tex font-thin italic">Singer, Composer and musician.</p> 
                    <p class="text-black text-xl font-thin italic">Pop, Reggaeton and Indi</p>
                </div>
            </div>

          </div>

          <!-- Cuadro 2 -->
          
          <div class="md:mb-0 lg:mt-16 ">
            <div class="max-w-sm my-4 bg-white w-full md:mt-0 md:mb-0">
                <div class="imgSize flex-none bg-cover overflow-hidden" style="background-image: url('/img/halex.jpg')"></div>
                <div class="mb-8 p-3">
                  <div class="font-bold text-2xl mb-4">Halex Music</div>
                  <p class="text-black text-xl font-thin italic">Singer, Composer and Image Designer.</p> 
                    <p class="text-black text-xl font-thin italic">Pop, Reggaeton and Indi</p>
                </div>
            </div>
            
            <div class="w-96 my-10 bg-woodsmoke-500 h-42 text-white md:mt-1">
                <div class="mb-8 p-3">
                  <div class="font-bold text-3xl mb-4 uppercase">Beat Maker</div>
                  <p class="text-xl font-thin italic">With a huge varierity of beats and rhythims to create your dream song. </p>
                </div>
            </div>

          </div>
          <!-- Cuadro 3 -->

          <div class="mb-14">
            <div class="w-96 my-4 mb-10 bg-woodsmoke-500 h-42 text-white md:mt-4 lg:mt-24">
                <div class="mb-8 p-3 ">
                  <div class="font-bold text-3xl mb-4 uppercase">Genre Manager</div>
                  <p class="text-xl font-thin italic">Personalized advising of music gerne and grove manager to ensure the best results with your talent. </p>
                </div>
            </div>

            <div class="max-w-sm my-4 bg-white w-full">
                <div class="imgSize flex-none bg-cover overflow-hidden" style="background-image: url('/img/juanmi.jpg')"></div>
                <div class="mb-8 p-3">
                  <div class="text-gray-900 font-bold text-2xl mb-2">Juanmi </div>
                  <p class="text-black text-xl tex font-thin italic">Singer and  Composer.</p> 
                    <p class="text-black text-xl font-thin italic">Pop, Reggaeton and Trap</p>
                </div>
            </div>

          </div>
          

         <!-- Cuadro 4 -->

      <div class="lg:mt-16">
          <div class="max-w-sm my-4 bg-white w-full md:mt-0">
                <div class="imgSize flex-none bg-cover overflow-hidden" style="background-image: url('/img/image3.jpeg')"></div>
                <div class="mb-8 p-3">
                  <div class="font-bold text-2xl mb-2">Leonardo Scirica</div>
                  <p class="text-black text-xl font-thin italic"> Music producer, Beat Maker and Singer.</p> 
                    <p class="text-black text-xl font-thin italic">Pop, Reggaeton, trap, Indi and a lot more!</p>
                </div>
            </div>
            
            <div class="w-96 my-10 bg-woodsmoke-500 h-42 text-white ">
                <div class="mb-8 p-3 ">
                  <div class="font-bold text-3xl mb-4 uppercase">All-in-One</div>
                  <p class="text-xl font-thin italic">From the designing of your Idea until the production of your beat, the voice recording, mastering and social media manager, you have a All-in-One producer!</p>
                </div>
            </div>

          </div>
    
        <!-- Pricing Header-->
      <div class="w-screen h-screen bg-wheat-500">
    <div class="text-center lg:text-center lg:mx-36 lg:my-10">
        
        <h1 class="font-bold uppercase mb-3 lg:text-5xl text-3xl lg:mb-6">Price designed for your production</h1>
        
        <h4 class="text-gray-800 text-2xl mb-12 lg:text-4xl italic">QUALITY. EFFICACY. SOUL.</h4>
    
    </div>
        
          <!-- Box 1  -->

    
    <div class="flex flex-col md:flex-row px-2 md:px-0 lg:ml-80 lg:p-8">
        <div class="w-full lg:1/3 md:w-1/3 bg-white rounded-lg shadow hover:shadow-2xl transition duration-100 ease-in-out p-10 md:mr-4 mb-10 md:mb-0">
            
            <h3 class="text-black text-2xl uppercase mt-2 border border-black inline-flex rounded p-2 tracking-wider mb-1 hover:bg-black hover:text-white hover:shadow-xl transition duration-150 ease-in-out ">Starter</h3>
            
            <p class="text-2xl text-black mt-2 font-thin mb-8 ">You Production is attached to two edition changes.</p>
            
            <p class="font-bold text-black text-4xl">$150/Beat</p>
            
            <p class="text-black mt-2 italic font-light">$50 extra after the second edition</p>
            
            <p class="text-4xl text-black mt-8">Top Features</p>

            <div class="text-sm text-black mt-4">
                
                <p class="my-6 mx-4 text-2xl font-light"><span class="fa fa-check-circle mr-2 ml-1"></span> Professional Beat Desing</p>

                <p class="my-6 mx-4 text-2xl font-light"><span class="fa fa-check-circle mr-2 ml-1"></span> Mastering: Beat and Voice</p>

                 <p class="my-6 mx-4 text-2xl font-light"><span class="fa fa-check-circle mr-2 ml-1"></span> Social Media and Music platform managment</p>    
          </div>    
            <button class="w-full text-xl text-black border border-black rounded hover:bg-black hover:text-white hover:shadow-xl py-4 mt-4 uppercase tracking-widest transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">Start your production</button>
        
          </div>

          <!-- Box 2 -->
        
         <div class="w-full lg:1/3 md:w-1/3 bg-black rounded-lg shadow hover:shadow-2xl transition duration-100 ease-in-out p-10 md:mr-4 mb-10 md:mb-0 lg:ml-64">
            
            <h3 class="text-white text-2xl uppercase mt-2 border border-white inline-flex rounded p-2 tracking-wider mb-1 hover:bg-wheat-500 hover:text-black hover:shadow-xl transition duration-150 ease-in-out">Starter</h3>
            
            <p class="text-2xl text-white mt-2 font-thin mb-8 ">You Production is attached to two edition changes.</p>
            
            <p class="font-bold text-white text-4xl">$150/Beat</p>
            
            <p class="text-white mt-2 italic font-light">$50 extra after the second edition</p>
            
            <p class="text-4xl text-white mt-8">Top Features</p>

            <div class="text-sm text-white mt-4">
                
                <p class="my-6 mx-4 text-2xl font-light"><span class="fa fa-check-circle mr-2 ml-1 text-wheat-500"></span> Professional Beat Desing</p>

                <p class="my-6 mx-4 text-2xl font-light"><span class="fa fa-check-circle mr-2 ml-1 text-wheat-500"></span> Mastering: Beat and Voice</p>

                 <p class="my-6 mx-4 text-2xl font-light"><span class="fa fa-check-circle mr-2 ml-1 text-wheat-500"></span> Social Media and Music platform managment</p>    
          </div>    
            <button class="w-full text-xl text-white border border-white hover:border-wheat-500 rounded hover:bg-wheat-500 hover:text-black hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 py-4 mt-4 uppercase tracking-widest">Start your production</button>
        
          </div>
    </div>
</div>

        </div>    
      </div>

      
     
   
    
</template>

<style scoped>

.imgHead {
  height: 900px;
}

.imgSize {
  height: 500px;
  background-repeat: no-repeat; 
  background-position: 50% 80%;
}

</style>


