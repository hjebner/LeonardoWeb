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

     <div class="w-full h-full bg-woodsmoke-500">

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
               
          <div class="flex flex-wrap bg-woodsmoke-500 my-20 justify-around font-oswald mt-4">
              <!-- Cuadro 1 Oriana -->
          <div class="mb-10 mx-1">
            <div class="lg:w-96 lg:my-2 mb-10 bg-woodsmoke-500 h-42 text-white md:mt-10 lg:mt-24">
                <div class="mb-8 p-3">
                  <div class="font-bold text-3xl mb-4 uppercase">Voices Recording</div>
                  <p class="text-xl font-thin italic">Very high voice recording quality with second and third voices in the project. </p>
                </div>
            </div>
            <div class="md:mb-0">
            <div class="my-4 bg-white lg:w-full md:my-0">
                <div class="imgSize flex-none bg-cover md:bg-center" style="background-image: url('/img/oriana.jpg')"></div>
                <div class="mb-8 p-3">
                  <div class="text-gray-900 font-bold text-2xl mb-2">Gudnana </div>
                  <p class="text-black text-xl tex font-thin italic">Singer, Composer and musician.</p> 
                    <p class="text-black text-xl font-thin italic">Pop, Reggaeton and Indi</p>
                </div>
            </div>
            </div>
          </div>

          <!-- Cuadro 2 -->
          
          <div class="md:mb-0 lg:mt-16 mx-2">
            <div class="my-4 bg-white lg:w-full md:my-0 ">
                <div class="imgSize flex-none bg-cover" style="background-image: url('/img/halex.jpg')"></div>
                <div class="mb-8 p-3">
                  <div class="font-bold text-2xl mb-4">Halex Music</div>
                  <p class="text-black text-xl font-thin italic">Singer, Composer and Image Designer.</p> 
                    <p class="text-black text-xl font-thin italic">Pop, Reggaeton and Indi</p>
                </div>
            </div>
            
            <div class="lg:mx-4 lg:w-96 lg:my-10 bg-woodsmoke-500 h-42 text-white md:mt-1">
                <div class="lg:mb-8 p-3 ">
                  <div class="font-bold text-3xl mb-4 uppercase">Beat Maker</div>
                  <p class="text-xl font-thin italic">With a huge varierity of beats and rhythims to create your dream song. </p>
                </div>
            </div>

          </div>
          <!-- Cuadro 3 -->

          <div class="lg:mb-14">
            <div class="mx-4 lg:w-96 lg:my-4 lg:mb-10 bg-woodsmoke-500 h-42 text-white md:mt-4 lg:mt-24">
                <div class="lg:mb-8 p-3 md:mx-3">
                  <div class="font-bold text-3xl mb-4 uppercase">Genre Manager</div>
                  <p class="text-xl font-thin italic">Personalized advising of music gerne and grove manager to ensure the best results with your talent. </p>
                </div>
            </div>

            <div class="mx-2 my-4 bg-white lg:w-full">
                <div class="imgSize flex-none bg-cover" style="background-image: url('/img/juanmi.jpg')"></div>
                <div class="mb-8 p-3">
                  <div class="text-gray-900 font-bold text-2xl mb-2">Juanmi </div>
                  <p class="text-black text-xl tex font-thin italic">Singer and  Composer.</p> 
                    <p class="text-black text-xl font-thin italic">Pop, Reggaeton and Trap</p>
                </div>
            </div>

          </div>
          

         <!-- Cuadro 4 -->

      <div class="lg:mt-16">
          <div class="mx-2 lg:my-4 bg-white lg:w-full md:mt-0">
                <div class="imgSize flex-none bg-cover" style="background-image: url('/img/image3.jpeg')"></div>
                <div class="mb-8 p-3">
                  <div class="font-bold text-2xl mb-2">Leonardo Scirica</div>
                  <p class="text-black text-xl font-thin italic"> Music producer, Beat Maker and Singer.</p> 
                    <p class="text-black text-xl font-thin italic">Pop, Reggaeton, trap, Indi and a lot more!</p>
                </div>
            </div>
            
            <div class="mx-4 lg:w-96 lg:my-10 bg-woodsmoke-500 h-42 text-white ">
                <div class="mb-8 p-3 ">
                  <div class="font-bold text-3xl mb-4 uppercase">All-in-One</div>
                  <p class="text-xl font-thin italic">From the designing of your Idea until the production of your beat, the voice recording, mastering and social media manager, you have a All-in-One producer!</p>
                </div>
            </div>

          </div>
    
        <!-- Pricing Header-->
      <div class="lg:w-full lg:h-full bg-wheat-500">
    <div class="text-center lg:text-center mt-8 lg:mx-36 lg:my-10">
        
        <h1 class="font-bold uppercase mb-3 lg:text-5xl text-3xl lg:mb-6">Price designed for your production</h1>
        
        <h4 class="text-gray-800 text-2xl mb-12 lg:text-4xl italic">QUALITY. EFFICACY. SOUL.</h4>
    
    </div>
        
          <!-- Box 1  -->

    
    <div class="flex flex-col lg:w-5/6 lg:justify-self-center lg:mx-64 md:flex-row px-2 md:px-0 lg:p-8">
        <div class="w-full lg:1/3 md:w-1/3 bg-white rounded-lg shadow hover:shadow-2xl transition duration-100 ease-in-out p-10 md:mr-4 mb-10 md:mb-0">
            
            <h3 class="text-black text-2xl uppercase lg:mt-2 border border-black inline-flex rounded p-2 tracking-wider lg:mb-1 hover:bg-black hover:text-white hover:shadow-xl transition duration-150 ease-in-out ">Starter</h3>
            
            <p class="text-2xl text-black mt-2 font-thin mb-8 ">You Production is attached to two edition changes.</p>
            
            <p class="font-bold text-black text-4xl">$150/Beat</p>
            
            <p class="text-black mt-2 italic font-light">$50 extra after the second edition</p>
            
            <p class="text-4xl text-black mt-8">Top Features</p>

            <div class="text-sm text-black mt-4">
                
                <p class="my-6 mx-4 text-xl lg:text-2xl font-light"><span class="fa fa-check-circle mr-2 ml-1"></span> Professional Beat Desing</p>

                <p class="my-6 mx-4 text-xl lg:text-2xl font-light"><span class="fa fa-check-circle mr-2 ml-1"></span> Mastering: Beat and Voice</p>

                 <p class="my-6 mx-4 text-xl lg:text-2xl font-light"><span class="fa fa-check-circle mr-2 ml-1"></span> Social Media and Music platform managment</p>    
          </div>    
            <button class="w-full text-xl text-black border border-black rounded hover:bg-black hover:text-white hover:shadow-xl py-4 mt-4 uppercase tracking-widest transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">Start your production</button>
        
          </div>

          <!-- Box 2 -->
        
         <div class="w-full lg:1/3 md:w-1/3 bg-black rounded-lg shadow hover:shadow-2xl transition duration-100 ease-in-out p-10 md:mr-4 mb-10 md:mb-0 lg:ml-64">
            
            <h3 class="text-white text-2xl uppercase mt-2 border border-white inline-flex rounded p-2 tracking-wider mb-1 hover:bg-wheat-500 hover:text-black hover:shadow-xl transition duration-150 ease-in-out">Advanced</h3>
            
            <p class="text-2xl text-white mt-2 font-thin mb-8 ">You Production is attached to two edition changes.</p>
            
            <p class="font-bold text-white text-4xl">$250/Beat</p>
            
            <p class="text-white mt-2 italic font-light">$50 extra after the second edition</p>
            
            <p class="text-4xl text-white mt-8">Top Features</p>

            <div class="text-sm text-white mt-4">
                
                <p class="my-6 mx-4 text-xl lg:text-2xl font-light"><span class="fa fa-check-circle mr-2 ml-1 text-wheat-500"></span> Professional Beat Desing</p>

                <p class="my-6 mx-4 text-xl lg:text-2xl font-light"><span class="fa fa-check-circle mr-2 ml-1 text-wheat-500"></span> Mastering: Beat and Voice</p>

                 <p class="my-6 mx-4 text-xl lg:text-2xl font-light"><span class="fa fa-check-circle mr-2 ml-1 text-wheat-500"></span> Social Media and Music platform managment</p>    
          </div>    
            <button class="w-full text-xl text-white border border-white hover:border-wheat-500 rounded hover:bg-wheat-500 hover:text-black hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 py-4 mt-4 uppercase tracking-widest">Start your production</button>
        
        </div>
          
        </div>
           <div class="flex justify-center ">
           <button class="px-6 py-2 mb-8 lg:w-5/6  bg-black text-white border border-black hover:border-wheat-500 rounded hover:bg-smokewood-500 hover:text-white hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 lg:py-8 lg:mb-12 uppercase tracking-widest">
           <div class="block">
           
           <div class="flex justify-center mb-2 lg:flex flex-wrap lg:justify-start lg:text-2xl lg:ml-44">Custom Work</div>
           <div class="flex lg:justify-start text-sm lg:flex lg:text-2xl lg:ml-16 text-wheat-500 italic font-thin lg:mt-1">Do you want a Personalized work?</div>
           <div class="mt-2 lg:flex lg:absolute inset-y-0 right-0 lg:justify-end lg:text-3xl lg:mr-20 lg:mt-12 white hover:text-wheat-500 ">Contact Me</div>
           </div>
           </button>
          </div>                     
      </div>

       <!-- About Section -->
    <div class="bg-smokewood-500 w-full">
      <section class="relative lg:py-20 bg-black text-white">
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img class="max-w-full mt-8 lg:mt-2 rounded-sm shadow-lg" src="../public/img/image8.jpeg"/>
            </div>
            
            <div
              class="w-full md:w-5/12 mt-16 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                
                <h1 class="font-bold text-white inset-y-0 right-32  uppercase mb-3 lg:text-9xl text-3xl lg:mb-6">Let's make something together</h1>
        
                <h4 class="lg:inset-y-0 lg:right-64 lg:mt-4 mt-2 text-wheat-500 text-2xl mb-12 lg:text-3xl italic">I also collaborate with others DJ's, Producers and Beatmakers</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <!-- Contact Form -->
      <div class="flex lg:w-full lg:h-full bg-white justify-center">
              <div class="relative flex flex-col break-words w-2/3 lg:mb-4 shadow-lg rounded-md bg-black mt-10 lg:mt-24">
                <div class="flex-auto text-center mt-10 p-5 lg:p-10 bg-orange-500 text-white">
                  <h4 class="lg:text-5xl text-2xl font-bold uppercase tracking-wider">Personalized Work</h4>
                  <p class="leading-relaxed mt-1 mb-4 text-center italic">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  
                  <div class="relative w-full mb-3 mt-8">
                    <label class="block uppercase text-md text-left font-bold mb-2" for="full-name">
                      Full Name
                      </label>
                    
                    <input type="text"
                      class="px-3 py-3 placeholder-black bg-white text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Full Name" style="transition: all 0.15s ease 0s"/>
                  </div>

                  <div class="relative w-full mb-8">
                    <label class="block uppercase text-md text-left font-bold mb-2" for="email">
                      Email
                    </label>
                    
                    <input type="email" class="px-3 py-3 placeholder-black bg-white text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Email" style="transition: all 0.65s ease 0s"/>
                  </div>
                  
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-md text-left font-bold mb-2" for="message">
                      Message
                      </label>
                      
                      <textarea rows="6" cols="100" class="px-3 py-3 placeholder-black bg-white text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Type a message...">
                    </textarea>
                  </div>
                  
                  <div class="text-center mt-4">
                    <button class="bg-white text-black text-md font-bold uppercase px-10 py-4 lg:text-xl rounded transition duration-500 ease-in-out transform hover:-translate-y-4 hover:scale-115 mt-4 tracking-widest" type="button" style="transition: all 0.65s ease 0s">
                      Send Message
                    </button>
                  </div>
                </div>
            </div>
        </div>      
      </div> 
      
      <!-- Footer -->

      <div class="lg:w-auto lg:h-auto bg-black flex flex-col">
                <div class="flex mt-6 mb-4 flex-row justify-around">
                    <a class="hidden md:block cursor-pointer text-white hover:text-white uppercase">About</a>
                    <a class="hidden md:block ml-20 cursor-pointer text-white hover:text-white uppercase">Contact</a>
                    <div class="flex flex-row space-x-8 items-center justify-between">
                        <a>
                            <svg width="20" height="20" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.89782 12V6.53514H5.67481L5.93895 4.39547H3.89782V3.03259C3.89782 2.41516 4.06363 1.99243 4.91774 1.99243H6V0.0847928C5.47342 0.0262443 4.94412 -0.00202566 4.41453 0.000112795C2.84383 0.000112795 1.76542 0.994936 1.76542 2.82122V4.39147H0V6.53114H1.76928V12H3.89782Z" fill="white"/>
                            </svg>                            
                        </a>
                        <a>
                            <svg width="20" height="25" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.99536 2.91345C5.17815 2.91345 4.39441 3.23809 3.81655 3.81594C3.2387 4.3938 2.91406 5.17754 2.91406 5.99475C2.91406 6.81196 3.2387 7.5957 3.81655 8.17356C4.39441 8.75141 5.17815 9.07605 5.99536 9.07605C6.81257 9.07605 7.59631 8.75141 8.17417 8.17356C8.75202 7.5957 9.07666 6.81196 9.07666 5.99475C9.07666 5.17754 8.75202 4.3938 8.17417 3.81594C7.59631 3.23809 6.81257 2.91345 5.99536 2.91345ZM5.99536 7.99586C5.46446 7.99586 4.9553 7.78496 4.57989 7.40955C4.20448 7.03415 3.99358 6.52499 3.99358 5.99408C3.99358 5.46318 4.20448 4.95402 4.57989 4.57861C4.9553 4.20321 5.46446 3.99231 5.99536 3.99231C6.52626 3.99231 7.03542 4.20321 7.41083 4.57861C7.78624 4.95402 7.99714 5.46318 7.99714 5.99408C7.99714 6.52499 7.78624 7.03415 7.41083 7.40955C7.03542 7.78496 6.52626 7.99586 5.99536 7.99586Z" fill="white"/>
                                <path d="M9.19863 3.51848C9.59537 3.51848 9.91698 3.19687 9.91698 2.80013C9.91698 2.4034 9.59537 2.08179 9.19863 2.08179C8.8019 2.08179 8.48029 2.4034 8.48029 2.80013C8.48029 3.19687 8.8019 3.51848 9.19863 3.51848Z" fill="white"/>
                                <path d="M11.6821 2.06975C11.5279 1.67138 11.2921 1.30961 10.99 1.00759C10.6879 0.705576 10.326 0.469972 9.92759 0.31586C9.46135 0.140842 8.9688 0.0462069 8.4709 0.0359839C7.82919 0.00799638 7.62594 0 5.99867 0C4.37139 0 4.16282 -6.70254e-08 3.52643 0.0359839C3.02891 0.0456842 2.53671 0.140339 2.07108 0.31586C1.67255 0.469792 1.31059 0.705333 1.00844 1.00737C0.706289 1.30941 0.47061 1.67127 0.316526 2.06975C0.141474 2.53595 0.0470554 3.02855 0.0373167 3.52643C0.00866281 4.16748 0 4.37072 0 5.99867C0 7.62594 -4.96485e-09 7.83319 0.0373167 8.4709C0.0473123 8.96935 0.14127 9.46113 0.316526 9.92825C0.471042 10.3266 0.70695 10.6883 1.00918 10.9903C1.3114 11.2923 1.6733 11.5279 2.07175 11.6821C2.5365 11.8642 3.0289 11.9656 3.52777 11.982C4.16948 12.01 4.37272 12.0187 6 12.0187C7.62728 12.0187 7.83585 12.0187 8.47223 11.982C8.97008 11.9719 9.46262 11.8775 9.92892 11.7028C10.3272 11.5483 10.689 11.3125 10.9911 11.0104C11.2932 10.7083 11.529 10.3466 11.6835 9.94825C11.8587 9.48179 11.9527 8.99 11.9627 8.49156C11.9913 7.85051 12 7.64727 12 6.01932C12 4.39138 12 4.18481 11.9627 3.54709C11.9549 3.04216 11.86 2.54237 11.6821 2.06975ZM10.8705 8.42159C10.8662 8.80562 10.7961 9.18608 10.6633 9.54642C10.5632 9.80555 10.41 10.0409 10.2135 10.2372C10.017 10.4336 9.78162 10.5867 9.52243 10.6866C9.16608 10.8188 8.78967 10.8889 8.4096 10.8938C7.77654 10.9231 7.59796 10.9305 5.97468 10.9305C4.35007 10.9305 4.18414 10.9305 3.53909 10.8938C3.15921 10.8892 2.78298 10.8191 2.42692 10.6866C2.16683 10.5873 1.93048 10.4345 1.73316 10.2381C1.53584 10.0417 1.38194 9.80605 1.28143 9.54642C1.15045 9.18995 1.08039 8.81398 1.07419 8.43425C1.04554 7.8012 1.03887 7.62261 1.03887 5.99933C1.03887 4.37539 1.03887 4.20946 1.07419 3.56375C1.0785 3.17993 1.14859 2.7997 1.28143 2.43958C1.48467 1.91382 1.90116 1.5 2.42692 1.29876C2.78316 1.16691 3.15928 1.09682 3.53909 1.09151C4.17281 1.06286 4.35073 1.05486 5.97468 1.05486C7.59862 1.05486 7.76522 1.05486 8.4096 1.09151C8.7897 1.09609 9.16617 1.1662 9.52243 1.29876C9.7816 1.39889 10.017 1.55211 10.2134 1.74858C10.4099 1.94504 10.5631 2.18041 10.6633 2.43958C10.7942 2.79606 10.8643 3.17203 10.8705 3.55175C10.8992 4.18547 10.9065 4.36339 10.9065 5.98734C10.9065 7.61062 10.9065 7.78521 10.8778 8.42226H10.8705V8.42159Z" fill="white"/>
                            </svg>    
                        </a>
                        <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw">
                            <svg width="25" height="25" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7355 1.415C12.6616 1.14357 12.517 0.896024 12.3162 0.697014C12.1154 0.498004 11.8654 0.354468 11.5911 0.280692C10.5739 0.00450089 6.5045 4.87928e-06 6.5045 4.87928e-06C6.5045 4.87928e-06 2.43578 -0.00449139 1.41795 0.259496C1.14379 0.336667 0.894302 0.482233 0.693428 0.68222C0.492554 0.882207 0.347041 1.1299 0.270859 1.40152C0.00259923 2.40737 9.51671e-07 4.49358 9.51671e-07 4.49358C9.51671e-07 4.49358 -0.0025972 6.59006 0.263714 7.58564C0.413109 8.13609 0.851549 8.57094 1.40885 8.71931C2.43643 8.9955 6.49476 9 6.49476 9C6.49476 9 10.5641 9.00449 11.5813 8.74115C11.8557 8.6675 12.106 8.52429 12.3073 8.32569C12.5086 8.12709 12.6539 7.87996 12.729 7.60876C12.998 6.60355 12.9999 4.51798 12.9999 4.51798C12.9999 4.51798 13.0129 2.42086 12.7355 1.415ZM5.20282 6.42628L5.20607 2.57244L8.58823 4.50257L5.20282 6.42628Z" fill="white"/>
                            </svg>                            
                        </a>
                    </div>
                </div>
                <p class="w-full text-center mt-4 text-white">Copyright © 2021 Helmut Ebner, alias: "El guevo pelao"</p>
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




