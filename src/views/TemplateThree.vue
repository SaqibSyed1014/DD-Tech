<script setup>
import NavBar from '../components/global/NavBar.vue'
import HeaderPart from '../components/templates/HeaderPart.vue'
import ImageWithCircle from '../components/global/ImageWithCircle.vue'
import FAQS from '../components/templates/FAQs.vue'
import ContactForm from '../components/templates/ContactForm.vue'
import Banner from '../components/templates/Banner.vue'
import Footer from '../components/templates/Footer.vue'
</script>

<template>
  <div class='site-frame template template-two container mx-auto'>
    <NavBar />

    <HeaderPart
      heading='Join the AI/ML Revolution with ConvrtX'
      circle-color='rgba(146, 170, 255, .2)'
      image-path='characters/boy_with_rocket.png'
      alt='Boy With Rocket'
    />

    <div class='relative bg-navy text-white text-center rounded-xl md:rounded-[40px] mt-14 lg:mt-16 mx-3 sm:mx-10 lg:mx-20 py-16 px-5 md:px-14'>
      <h2 class='template-heading !text-white mb-10 sm:mb-16 relative z-[11]'>Artificial Intelligence &Machine Learning Development Services</h2>
      <p class='pb-8'>AI is a game-changer for businesses around the world. But will it be a game-changer for you? That’s what ConvrtX will help you find out. We have worked with both top companies and startups to find data-driven solutions to their business challenges. Our AI and ML development services will help you break new ground in everything from software to marketing campaigns. We provide an excellent return on investment, make better decisions, ensure customer satisfaction, and speed up the process with unique automated workflows.</p>

      <p>AI has penetrated almost every corner of the business sphere. Its applications are relevant to many industries like healthcare, finance, education, blockchain, gaming, SaaS, and more. Whichever industry you belong to, ConvrtX’s expertise in AI will help you improve your business outcomes.</p>

      <img class='pt-14 pb-10 pl-32' src='illustrations/golden_3D_ball.png' alt='Golden 3D Ball'>

      <div class='absolute -top-[2%] sm:-top-[3%] right-10 sm:right-20 rounded-full bg-[#D8D8D8] w-[2.7rem] h-[2.7rem]'></div>

      <img class='absolute top-24 left-14 z-[1]' src='illustrations/red_ball.png' alt='Red 3D Ball'>
      <div class='absolute bottom-32 left-8 sm:left-14 rounded-full bg-white w-8 h-8'></div>
      <div class='absolute bottom-[18%] sm:bottom-[28%] left-16 sm:left-24 rounded-full bg-white w-[4.5rem] h-[4.5rem] opacity-50'></div>
      <div class='absolute bottom-[25%] right-14 rounded-full bg-[#686868] w-[8.7rem] h-[8.7rem] opacity-50'></div>
      <div class='absolute transform left-[28%] sm:left-[40%] -translate-y-[17%] sm:-translate-y-[30%] shadow-lg rounded-full bg-white w-40 h-40 sm:w-48 sm:h-48 md:w-[16.8rem] md:h-[16.8rem]'></div>
    </div>

    <section class='px-3 sm:px-10 lg:px-20 pt-20'>
      <h2 class='template-heading text-center mb-5'>What do our developers offer?</h2>
      <p class='text-center'>AI is growing rapidly. We keep up with the new technologies, cutting-edge tools, and efficient algorithms. The ConvrtX team brings skill, passion, and creativity to the table with our AI solutions.</p>
      <div class='grid grid-cols-1 lg:grid-cols-2 items-center gap-0'>
        <div>
          <ul>
            <li>Automated processes to save time and minimize errors</li>
            <li>Predictive models for intelligent decision-making</li>
            <li>Custom AI schemes to suit different projects</li>
            <li>Identifying opportunities to integrate AI</li>
            <li>Efficient ML algorithms to streamline operations</li>
            <li>Apple ARKit</li>
            <li>Flexibility due to expertise at all major ML frameworks</li>
          </ul>
        </div>
        <div>
          <img class='mx-auto' src='characters/uncle_with_laptop.png' alt='Uncle With Laptop'>
        </div>
      </div>
    </section>

    <section class='px-3 sm:px-10 lg:px-20 pb-10'>
      <h2 class='template-heading text-center mb-5'>Reasons to Choose AI and ML Development for Your Business with ConvrtX</h2>
      <p class='text-center'>For many businesses, integration of AI is not a question of if but when. There’s a good chance that your competitors know the value of AI and are adopting it. You can’t afford to lag behind. This is why to get ahead, you will need the support of reliable service, and we at ConvrtX seek to provide you just that.</p>
      <div class='grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-0 pt-6 lg:pt-16'>
        <div>
          <p><strong>Improve Marketing Strategies:</strong>  AI provides better opportunities for personalization to provide the best experience for your customers. With AI, ConvrtX can collect data for highly targeted marketing campaigns that maximize your conversions. We optimize your marketing strategies by collecting data on their performance and implementing upgrades faster. 2.	Spend Your</p>

          <p class='py-8'><strong>Time on What Really Matters:</strong> AI eliminates repetitive tasks that take your time and attention away from more critical studies. With our AI and ML services, the functions used to take hours can be completed in seconds.</p>

          <p><strong>Deliver Greater Value to Customers:</strong> AI helps you understand consumer behavior like never before. You can use this to improve your products and services to meet your customers’ needs and enhance their experience. For example, ConvrtX can assist you in providing better customer service through applications like chatbots.</p>
        </div>
        <div>
          <image-with-circle class='mx-auto' image-path='imgs/analysis.png' alt='Analytics' circle-color='#ffffff' />
        </div>
      </div>
    </section>

    <FAQS />

    <ContactForm />

    <Banner />

    <Footer />
  </div>
</template>

<style scoped>

</style>
