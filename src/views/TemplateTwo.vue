<script setup>
import NavBar from '../components/global/NavBar.vue'
import HeaderPart from '../components/templates/HeaderPart.vue'
import ImageWithCircle from '../components/global/ImageWithCircle.vue'
import Banner from '../components/templates/Banner.vue'
import Footer from '../components/templates/Footer.vue'
import FAQS from '../components/templates/FAQs.vue'

const services = [
  { text: 'Music Application Development', image: 'src/assets/imgs/glossy.png', alt: 'Speaker' },
  { text: 'iPad App Development', image: 'src/assets/imgs/board.png', alt: 'Board' },
  { text: 'Apple Tv App Development', image: 'src/assets/imgs/shape.png', alt: 'Shape' },
  { text: 'iPhone App Development', image: 'src/assets/imgs/block.png', alt: 'Block' },
  { text: 'iWatch App Development', image: 'src/assets/imgs/wallet.png', alt: 'Wallet' },
  { text: 'Video/Audio iOS App', image: 'src/assets/imgs/play_block.png', alt: 'Play' },
  { text: 'Automobile Application ', image: 'src/assets/imgs/colored_ball.png', alt: 'Ball' },
  { text: 'Real-time e-Commerce Application Development', image: 'src/assets/imgs/curved_board.png', alt: 'Curving' },
  { text: 'Travel & Hospitality Application Development', image: 'src/assets/imgs/rocket.png', alt: 'Rocket' },
]
</script>

<template>
  <div class='site-frame template template-two container mx-auto'>
    <NavBar />
    <HeaderPart circle-color='rgba(56, 52, 245, 0.18)' image-path='src/assets/imgs/dashboard.png' alt='Dashboard' />

    <section class='px-3 sm:px-10 lg:px-28 py-10 text-center'>
      <h2 class='template-heading mb-5'>Technologies Development with ConvrtX</h2>
      <p>ConvrtX’sservices are assorted with a wide variety of offerings which include the likes of app development, website development, AR, and VR. Do you know why the essence of this development sector stands out? It’smainly due to our team’sdrive for excellence aboveall. There is no popular sector of this technological industry that has not been explored by us. Our standardized approach to innovation can help take yourtechnological venture to another level.</p>
      <div class='relative py-16'>
        <img class='mx-auto' src='../assets/illustrations/curves_illustration.png' alt='Curve'>
      </div>
      <p>You must be wondering about the prospects offered by our services.You won’t have to fret over the matter because not only are our services optimized to keep up with the changing trends, but they are also subject to precision quality. ConvrtX is well aware that we can’t sell the same service for different futuristic technologies, but what we can do is keep up with our advanced service offerings and update our development team according to your custom projects.</p>
      <button type='button' class='uppercase mt-16'>BOOK A MEETING</button>
    </section>

    <section class='px-3 sm:px-10 lg:px-20 pb-10'>
      <h2 class='template-heading text-center mb-5'>Why Should You Choose to Partner with ConvrtX?</h2>
      <div class='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 pt-10'>
        <p>We work towards establishing a well-defined amalgamation of our resources with your ideas. You will not only be able to rely on us to be proficient with our efforts but will also have a sense of confidence in our abilities. The services we provide are well aligned for each technological sector of your offering. Our teamwill help gather your confidence when it comes to their services which in turn will give you peace of mind with knowingyour project is in good hands.</p>
        <div>
          <image-with-circle image-path='src/assets/imgs/hexagon.png' alt='Hexagon' circle-color='rgba(85, 117, 232, 0.18)' />
        </div>
      </div>
    </section>

    <section class='px-3 sm:px-10 lg:px-20 pb-10'>
      <h2 class='template-heading text-center mb-5'>Why Should You Choose to Partner with ConvrtX?</h2>
      <div class='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 pt-10'>
        <div class='content'>
          <p>App Development: Our smartly directedapproach towards the development of applications ensures that all
          essential aspects are taken into consideration and the final product is readily available to users.</p>

          <p>Website Development: From the graphics to the content generation, when it comes to website development, our
            teams gear up to provide the best in every section of the web-based server.</p>

          <p>Game Development: Once you have conceptualized the core aspects of your game idea, we will help you bring
            it to life through designing and testing.</p>

          <p>AR and VR: Both AR and VR are essentially supposed to provide a simulated experience, so to regulate their
            dynamic features foryour idea, and we have the right resources to integrate the different elements.</p>

          <p>Blockchain:ConvrtX helps youto be goal-oriented to establish astrongblockchain development company. Our
            teamwill build, govern, and expand yourblockchain venture ona larger scale.</p>

          <p>Internet Of Things: Our efficiency is something we credit to the IoT that helps establish an interconnected
            network across different platforms which inevitably allows there to be a stable connection between the
            various devices across platforms.</p>

          <p>Testing and QA: ConvrtX gives youa sense of confidence in your venture once it passes ourtesting stage. This step also allows usto fix any discrepancies that may be present.</p>

        </div>
        <div>
          <image-with-circle class='mb-20 md:mb-36' image-path='src/assets/imgs/hexagon.png' alt='Hexagon' circle-color='rgba(89, 86, 233, .3)' />
          <image-with-circle image-path='src/assets/imgs/tablet.png' alt='Tablet' circle-color='#D5DDFB' />
        </div>
      </div>
    </section>

    <section class='px-3 sm:px-10 lg:px-20 pb-10'>
      <h2 class='template-heading text-center mb-5'>Our Technological Development Experts</h2>
      <div class='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 pt-10'>
        <div>
          <p class='mb-3'>You can tell a lot about a company’s potential through itswork operations. We believe in our team of
          developers to establish thatconnection with our clients. Once, we are able to get through to you, we go over
          the rest of the details which includes the different budget plans and project deadlines.Our team of selected
          experts will have adeep understanding of yourcustom venture.</p>
          <p>So, if you have any doubts aboutwhich services you should opt for, all you need to do is reach out to us.
            We can discuss further your requirements and see if we have it in us to live up to your expectations.</p>
        </div>
        <div>
          <image-with-circle image-path='src/assets/illustrations/3d_character.png' alt='3D Character' circle-color='rgba(85, 117, 232, 0.18)' />
        </div>
      </div>
    </section>

    <section class='px-5 sm:px-10 lg:px-20 pb-10'>
      <h2 class='template-heading text-center mb-5'>iPhone App Development Services For Any Device and Purpose </h2>
      <div class='grid grid-rows-9 grid-cols-1 sm:grid-rows-5 sm:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-16 lg:gap-20 pt-10'>
        <div v-for='(service, i) in services' :key='i' class='services-badge'>
          <div><img :src='service.image' :alt='service.alt'></div>
          <p>{{ service.text }}</p>
        </div>
      </div>
      <p class='text-center pt-16'>We are your best shot at creating and developing your ideal app. You can reach new heights of achievement with our flawless and dynamic iPhone App Development practices all around the world.</p>
    </section>

    <FAQS />

    <Banner />

    <Footer />

  </div>
</template>


<style lang='scss'>
.services-badge{
  background: white;
  border-radius: 12px;
  height: 55px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid red;
  position: relative;
  div{ margin-left: -1rem; }
  img{
    //transform: scale(1.1);
  }
  p{ font-size: 18px; font-weight: 400; }
}
</style>
