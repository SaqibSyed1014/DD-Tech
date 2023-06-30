<script setup>
import NavBar from '../components/global/NavBar.vue'
import HeaderPart from '../components/templates/HeaderPart.vue'
import ImageWithCircle from '../components/global/ImageWithCircle.vue'
import FloatingCard from '../components/templates/FloatingCard.vue'
import FAQS from '../components/templates/FAQs.vue'
import ContactForm from '../components/templates/ContactForm.vue'
import Banner from '../components/templates/Banner.vue'
import Footer from '../components/templates/Footer.vue'
</script>

<template>
  <div class='site-frame template template-two container mx-auto'>
    <NavBar />

    <HeaderPart
      heading='Revolutionize the Digital Industry With ConvrtX in Mississauga, Canada'
      circle-color='rgba(47, 163, 242, .4)'
      image-path=''
      alt=''
    />

    <div class='relative bg-primary text-white text-center mx-3 my-20 sm:mx-10 lg:mx-20 px-3 sm:px-10 lg:px-20 py-10'>
      <h2 class='template-heading w-11/12 mx-auto !text-white text-center mb-5'>Create A Digital Space That Helps Cushion Your Business</h2>
      <p>ConvrtX offers custom software development services that can help transform your brilliant ideas into substantial profit. We are Mississauga, Canada's leading supplier of custom software development services. ConvrtX offers you everything from cutting-edge technology to automated business quality testing while also helping you maintain your project's technological prowess.</p>

      <p class='py-8'>Don't you want your project to discover the modern world's new landscapes? Then, why not get started right away on this new adventure with ConvrtX. We are known for delivering the most cost-effective software solutions in Mississauga. Our product development team comprises highly trained programmers, seasoned engineers, and quality assurance specialists. Moreover, we ensure that the customized tech solutions that we engineer for your business are tailored to your specific requirements.</p>

      <p>Our optimized services for software development provide on-the-spot consultation and assistance to help you achieve your market goals in today's competitive environment. ConvrtX's squad of professionals is just a phone call away. So, please contact us now to start working on achieving your innovative project goals while also giving your software more power and value.</p>

      <img class='absolute -top-3 -left-3' src='/illustrations/3D_pink_balls.png' alt='3D Pink Balls'>
      <img class='absolute -top-6 -right-5' src='/illustrations/white_balls_group.png' alt='White Ball Group'>
      <img class='absolute transform rotate-180 -bottom-3 -right-3' src='/illustrations/3D_pink_balls.png' alt='3D Pink Balls'>
      <img class='absolute transform rotate-180 -bottom-6 -left-5' src='/illustrations/white_balls_group.png' alt='White Ball Group'>
    </div>

    <div class='relative bg-navy text-white mt-14 lg:mt-16 pt-48 md:pt-60 lg:pt-16 pb-72 md:pb-96 lg:pb-32 px-6 lg:px-28'>
      <h2 class='template-heading !text-white mb-10 sm:mb-16 relative z-[11]'>Turn Your Dreams Into Realities</h2>
      <div class='grid grid-cols-1 lg:grid-cols-2 lg:gap-32 relative z-[11]'>
        <div>
          <p class='pb-8 lg:pb-32'>ConvrtX makes your dream project a reality through our well-strategized software development plans. Ever since we started out, we have created the most dynamic and revolutionary software for our prestigious clients, and till today we continue to surpass their set standards. As a result, ConvrtX has proven to be one of Canada's best software development providers - based on overwhelmingly positive reviews from our clients.</p>

          <p>Our dedication and obligation to provide high-quality services have led to our growth. Striking for excellence motivates us to exceed the industry expectations while providing you with the best technological solutions.</p>
        </div>
        <div class='pt-8 lg:pt-[23rem]'>
          <ul>
            <li>ConvrtX's software development plans utilize certified procedures that follow industry best practices and have the highest industry worth.</li>
            <li class='py-6 lg:py-10'>We are a dependable and strategic partner with a research and development-focused workforce. We have the technical expertise required to create successful projects.</li>
            <li>We are specialists in technological solutions and have the know-how to make projects more productive and efficient in an agile and straightforward manner.</li>
            <li class='py-6 lg:py-10'>Each of our development projects is completed with 100% contractual compliance.</li>
            <li>Our long-term client connections are built on creative solutions that allow us to enhance their business and meet their goals.</li>
            <li class='pt-6 lg:pt-10'>In Mississauga, Canada, we have a committed team of collaborators committed to research and development. Also, we employ skilled, certified engineers with experience in project development processes and technologies.</li>
          </ul>
        </div>
      </div>

      <img class='absolute -top-[3%] sm:-top-[4%] -left-[10%] sm:-left-[2%]' src='/illustrations/red_3D_ball.png' alt='Red 3D Ball'>
      <div class='absolute right-0 top-0'>
        <img class='ml-auto w-6/12 sm:w-9/12 md:w-7/12 lg:w-auto' src='/imgs/circles_group.png' alt='Circles Group'>
      </div>
      <div class='absolute left-0 bottom-0'>
        <img class='mr-auto w-8/12 sm:w-9/12 md:w-7/12 lg:w-auto' src='/imgs/settings.png' alt='Settings'>
      </div>
    </div>

    <section class='px-3 sm:px-10 lg:px-20'>
      <h2 class='template-heading text-center mb-5'>What Can We Do To Assist You?</h2>
      <p class='text-center pb-8 lg:pb-20'>ConvrtX is a software development company. Our bespoke software development, analytics, and business consulting firm help firms embrace technology and achieve strategic goals by combining a zealous entrepreneurial spirit and a consulting attitude.</p>
      <div class='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0'>
        <div>
          <strong>Software Development on Demand</strong>
          <p class='pb-10'>You can be sure that your project is in good hands with our "Mobile First" development philosophy, which is backed by an industry-leading warranty against hidden faults. We are continuously bringing new ideas to the table and assisting you in seeing your product's long-term potential. Simultaneously, we adopt a realistic approach in helping you launch the product as quickly as possible. We use a cutting-edge technology stack and encourage CI/CD pipelines to speed up the build-release process.</p>

          <strong>Solutions for Business Analytics</strong>
          <p>Decision-makers and analysts in companies can utilize Business Intelligence (BI) tools to slice and dice data to gain valuable insights. Machine Learning and AI integrated solutions help provide predictive and prescriptive analytics. We work with all leading BI technologies at ConvrtX and complete mostdashboard projects well before time. We can also assist you with the development of Machine Learning models in or Python.</p>
        </div>
        <div>
          <image-with-circle class='mx-auto' image-path='' alt='' circle-color='rgba(89, 86, 233, .3)' />
        </div>
      </div>
    </section>

    <div class='py-10 md:py-20'>
      <h2 class='template-heading text-center mb-20 md:mb-10'>Management Advisory Services</h2>

      <FloatingCard
        :card-number='1'
        card-color='#F0BE5A'
        text='We at ConvrtX specialize in assisting corporations in completing strategic initiative projects on schedule. Our team draws on years of industry expertise and tried-and-true processes to create bespoke execution plans for each client based on their specific needs.'
      >
        <div>
          <img class='relative -top-3' src='/imgs/phone.png' alt='Phone'>
          <img class='absolute -top-5 -right-5' src='/illustrations/golden_3D_sharp.png' alt='Golden Ball'>
        </div>
      </FloatingCard>

      <FloatingCard
        :card-number='2'
        card-color='#F1B2CC'
        card-position='right'
        text="By increasing skill and capacity, our team operates as an extension of the client's team. As a result, we provide project consultancy and complete end-to-end solutions that include everything from project planning to manage crucial milestones and risk mitigation."
      >
        <div>
          <img class='relative -top-3' src='/imgs/gears.png' alt='Settings Gears'>
          <img class='absolute -top-5 -left-12' src='/illustrations/golden_3D_sharp.png' alt='Golden Ball'>
        </div>
      </FloatingCard>

      <FloatingCard
        :card-number='3'
        card-color='#9A5BFF'
        text="ConvrtX Uses Your Favorite Tools: We are capable of working with the majority of the contemporary technology available in the market. You've put your faith in us to produce a viable project, and we'll take on the full responsibility for selecting/recommending the best tool stack for your short-and long-term goals."
      >
        <div>
          <img class='relative -top-3' src='/characters/boy_on_ball.png' alt='Boy On Ball'>
          <img class='absolute -top-4 -right-12' src='/illustrations/blue_3D_ball.png' alt='Blue 3D Ball'>
          <img class='absolute bottom-8 -left-16 sm:-left-24' src='/illustrations/orange_board.png' alt='Orange Board'>
        </div>
      </FloatingCard>
    </div>

    <FAQS />

    <ContactForm />

    <Banner />

    <Footer />
  </div>
</template>

<style scoped>

</style>
