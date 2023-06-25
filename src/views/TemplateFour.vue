<script setup>
import NavBar from '../components/global/NavBar.vue'
import HeaderPart from '../components/templates/HeaderPart.vue'
import ImageWithCircle from '../components/global/ImageWithCircle.vue'
import Banner from '../components/templates/Banner.vue'
import Footer from '../components/templates/Footer.vue'
import FAQS from '../components/templates/FAQs.vue'
import ContactForm from '../components/templates/ContactForm.vue'
</script>

<template>
  <div class='site-frame template template-two container mx-auto'>
    <NavBar />
    <HeaderPart
      heading="Learn How To Scale Your Company At ConvrtX's Startup Bootcamp"
      circle-color='rgba(195, 126, 176, .3)'
      image-path='src/assets/illustrations/saly_girl.png'
      alt='Girl'
    />

    <section class='px-3 sm:px-10 lg:px-28 py-10 text-center'>
      <h2 class='template-heading mb-5'>Get The Tools Necessary For Running A Business</h2>
      <p>ConvrtX's Startup Bootcamp is a training program designed to help entrepreneurs who want their businesses. The boot camp will cover everything from pitching, communicating with investors and customers, and scaling your company so that you can make it as profitable as possible.</p>
      <p class='pt-8'>ConvrtX provides the ideal chance for those who want to start their own business by giving them all the tools they need to thrive in today's competitive market.</p>
      <div class='relative pt-14 pb-28 sm:py-16'>
        <img class='absolute left-1/2 transform -translate-x-1/2 w-7/12 sm:w-auto' src='../assets/illustrations/dart_board.png' alt='Dart Board'>
        <img class='mx-auto' src='../assets/illustrations/curves_illustration.png' alt='Curve'>
      </div>
      <p>We know there are a lot of folks who want to work in the startup sector but don't know where to start. That's why we offer Startup Bootcamp: a program designed for beginners and experts alike where you'll have access to industry leaders in your field as well as tips from seasoned entrepreneurs like yourself!</p>

      <p class='py-8'>We're all about developing talent here at ConvrtX -and no matter what level of experience you've got with startups or entrepreneurship, our team is ready and waiting to help push back barriers and open doors. So you can take your ideas from concept straight through funding without getting lost along the way.</p>

      <p>ConvrtX is a platform for aspiring founders and early-stage entrepreneurs to grow their startups into thriving businesses. ConvrtX offers strategic planning, customer acquisition advice, resources from industry professionals around the world, as well as state-of-the-art technology to help get you off on the right foot!</p>

      <p class='pt-8'>We provide you with experienced guidance while also leveraging innovative technologies that will make your journey easier than ever before.</p>
      <button type='button' class='uppercase mt-16'>BOOK A MEETING</button>
    </section>

    <section class='px-3 sm:px-10 lg:px-20 pb-10'>
      <h2 class='template-heading text-center mb-5'>Learn From The Best In The Industry</h2>
      <p class='text-center'>In today's economy, it takes a village to make you successful. Our network of mentors and partners can help your company get the best out of their hard work with guidance from people who have been in similar situations before.</p>
      <p class='text-center py-8'>ConvrtXBootcamp helps you build your skills and professional network to grow as a business owner. Our knowledgeable staff will assist you in staying motivated, educated, and connected to those who understand what it takes to thrive in the startup environment.</p>
      <div class='grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-0 pt-10'>
        <div>
          <p>ConvrtX is the company that will help you go from being a startup to an established business with efficient mentorship in digital customer service and innovative marketing strategies.</p>

          <p class='py-8'>We do more than just converting your product or services into social medianetworks. We also have many other facets of our site geared towards aiding and scaling up of businesses, including</p>

          <ul>
            <li>Data analytics</li>
            <li>Database integration</li>
            <li>Project management software</li>
            <li>CRM (customer relationship management) tools</li>
            <li>SEO optimization.</li>
          </ul>

          <p class='pt-8'>We take pleasure in offering a wide range of programs to assist you in achieving your goals. From our in-house coaching and education team to Demo Day that celebrates all your hard work, we've got you covered.We have the resources for every need: expert guidance with industry professionals or opportunities like pitch decks where everyone can see your progress firsthand!</p>
        </div>
        <div>
          <image-with-circle image-path='src/assets/illustrations/old_man.png' alt='Hexagon' circle-color='rgba(85, 117, 232, 0.18)' />
        </div>
      </div>
    </section>

    <section class='px-3 sm:px-10 lg:px-20 pb-10'>
      <h2 class='template-heading text-center mb-5'>Our Mentors Will Set You Up For Success</h2>
      <p class='text-center pt-10'>Startups need help with everything from product development to introductions. That's why our mentors are here, ready and eager to give you the guidance that will take your company skyrocketing in no time! Our system is set up to match you with lead mentors, who will work directly with you on all elements of your company growth. We make it easy for you by giving expert advice when needed and offering you helpful information that will aid your startup. So start exploring what ConvrtX has available today-we bet there's something perfect waiting just for YOU!</p>
      <div class='grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-0 pt-10'>
        <div>
          <image-with-circle class='!ml-0' image-path='src/assets/illustrations/star.png' alt='Star' circle-color='rgba(116, 101, 236, .3)' />
        </div>
        <p>You'll be joining an exciting, collaborative team as we work to power the future of startups and entrepreneurship. You'll get unparalleled access and mentorship so that you can take your idea for a new product or service through to execution. We want you on board because if there's one thing that everyone in this company knows how to do -and it is to make things happen</p>
      </div>
    </section>

    <section class='px-3 sm:px-10 lg:px-28 py-10 text-center'>
      <h2 class='template-heading mb-5'>Become A Successful Startup Through Our Bootcamp Program </h2>
      <p>Our Bootcamp program is a perfect opportunity to get started on your business idea without any pre-existing experience. Participants receive top support and access to experts in the industry, giving you all of the necessary resources needed for success! Not only do participants have 24/7 help from mentors, but they also gain firsthand knowledge by being able to learn directly from engineers who are currently working at successful startups. We offer mentoring, training, and a place where people can learn from each other to achieve success in starting or expanding their businesses.</p>
      <p class='pt-8'>ConvrtX provides the ideal chance for those who want to start their own business by giving them all the tools they need to thrive in today's competitive market.</p>
      <div class='relative pt-14 pb-28 sm:py-16'>
        <img class='absolute left-[37%] top-20 transform -translate-x-1/2 w-7/12 sm:w-auto' src='../assets/illustrations/purple_board.png' alt='Purple Board'>
        <img class='absolute left-1/2 transform -translate-x-1/2 w-7/12 sm:w-auto' src='../assets/illustrations/girl_2.png' alt='Girl 2'>
        <img class='mx-auto' src='../assets/illustrations/curves_illustration.png' alt='Curve'>
      </div>
      <p class='pt-10 sm:pt-20'>ConvrtX Startup BootCamp has everything you need if your goal isto become an entrepreneur! We also train you in marketing strategies or finance basics -plus, there's always someone around at ConvrtX willing to answer more of those tricky entrepreneurial questions when they come up.</p>
    </section>

    <FAQS />

    <ContactForm />

    <Banner />

    <Footer />

  </div>
</template>

