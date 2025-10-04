// Toggle Services submenu for mobile
function toggleServicesMenu() {
  const submenu = document.getElementById('services-submenu');
  submenu.classList.toggle('show');
}

// Load Home by default
window.onload = showHome;

// Show Home content
function showHome() {
  const main = document.querySelector('main');
  main.classList.remove('service-page');
  document.getElementById("main-content").innerHTML = `
    <div class="homepage">
      <h2>Welcome to Mighty Air</h2>
      <p>
        At <b>Mighty Air</b>, we take pride in being a trusted, locally-owned company
        providing <b>professional heating, cooling, and air solutions</b> in Christchurch.  
        With years of hands-on experience, we deliver reliable, energy-efficient systems
        that keep your home or business comfortable all year round.
      </p>
      <p>
        Our team is dedicated to <b>quality workmanship</b>, <b>friendly service</b>,
        and <b>long-lasting solutions</b> that fit your lifestyle and budget. 
        Whether you need a single-room heat pump, a ducted system, or tailored commercial solutions,
        we’ve got you covered.
      </p>
      <p><b><span style="color: orange;">Why choose Mighty Air?</span></b></p>
      <ul style="margin-left:1em;">
        <li> Expert advice and installation</li>
        <li> Energy-efficient, eco-friendly systems</li>
        <li> 24/7 emergency support</li>
        <li> 100% satisfaction guaranteed</li>
      </ul>
      <br>
      <p>
        Discover why families and businesses choose <b>Mighty Air</b> — 
        where comfort meets reliability.
      </p>
      <p style="display:flex; gap:24px; justify-content:center; align-items:center;">
        <img src="image/777.png" alt="Mitsubishi Electric Logo" style="width:200px;height:auto;">
        <img src="image/666.png" alt="Figitsu Logo" style="width:200px;height:auto;">
      </p>
    </div>
  `;
}

// Show Services List
function showServices() {
  const main = document.querySelector('main');
  main.classList.add('service-page');
  document.getElementById("main-content").innerHTML = `
    <h2>Our Services</h2>
    <ul>
       <li><a href="#" onclick="showServiceDetail('Heat Pumps'); return false;"><b>Heat Pumps</b></a></li>
       <li><a href="#" onclick="showServiceDetail('Air Conditioning'); return false;"><b>Air Conditioning</b></a></li>
       <li><a href="#" onclick="showServiceDetail('Ducted Systems'); return false;"><b>Ducted Systems</b></a></li>
       <li><a href="#" onclick="showServiceDetail('Light Commercial Air Conditioning'); return false;"><b>Light Commercial Air Conditioning</b></a></li>
       <li><a href="#" onclick="showServiceDetail('Multi Room Heat Pumps'); return false;"><b>Multi Room Heat Pumps</b></a></li>
    </ul>
  `;
}

// Show individual service details
function showServiceDetail(service) {
  let details = "";

  switch(service) {
    case "Heat Pumps":
      details = `
        <p>At Mighty Air, we specialize in energy-efficient heat pumps that keep your home warm in winter and cool in summer with a single system. Heat pumps transfer heat rather than generate it, making them <b>cost-effective</b> and <b>eco-friendly</b>.</p>
        <ul>
          <li>Warm in winter, cool in summer</li>
          <li>Lower power bills compared to traditional heaters</li>
          <li>Quiet, safe, and reliable</li>
          <li>Perfect for New Zealand’s climate</li>
        </ul>
        <p>
          <img src="image/Heatpump1.png" alt="Heat Pump 1" style="width:400px;height:auto;">
          <img src="image/Heatpump2.png" alt="Heat Pump 2" style="width:400px;height:auto;">
        </p>
      `;
      break;

    case "Air Conditioning":
      details = `
        <p>Stay cool and comfortable all summer long with our <b>air conditioning solutions</b>. Modern, energy-efficient systems provide <b>quiet performance</b> and <b>improved air quality</b>.</p>
        <ul>
          <li>Energy-efficient cooling</li>
          <li>Quiet and reliable operation</li>
          <li>Ideal for homes and offices</li>
        </ul>
        <p>
        <img src="image/Air11.png" alt="Air Conditioning 1" style="width:400px;height:auto;">
        </p>
        </div>
      `;
      break;

    case "Ducted Systems":
      details = `
        <p>For seamless comfort throughout your home, a <b>ducted system</b> provides even heating and cooling with discreet vents. Zone control allows personalized temperature in each room.</p>
        <ul>
          <li>Whole-home comfort</li>
          <li>Hidden, discreet design</li>
          <li>Zone control for different rooms</li>
        </ul>
        <p>
          <img src="image/Ducted1.png" alt="Ducted Systems 1" style="width:400px;height:auto;">
          <img src="image/Ducted2.png" alt="Ducted Systems 2" style="width:400px;height:auto;">
        </p>
      `;
      break;

    case "Light Commercial Air Conditioning":
      details = `
        <p>Keep your business space comfortable year-round with our <b>light commercial air conditioning solutions</b>. Perfect for offices and retail spaces.</p>
        <ul>
          <li>Reliable comfort for workspaces</li>
          <li>Energy-efficient systems</li>
          <li>Tailored solutions for businesses</li>
        </ul>
        <p>
          <img src="image/Light1.png" alt="Light Commercial Air Conditioning 1" style="width:400px;height:auto;">
          <img src="image/Light2.png" alt="Light Commercial Air Conditioning 2" style="width:400px;height:auto;">
        </p>
          `;
      break;

    case "Multi Room Heat Pumps":
      details = `
        <p>Enjoy personalized comfort with <b>multi-room heat pump systems</b>. One outdoor unit connects to multiple indoor units, allowing individual temperature control in each room.</p>
        <ul>
          <li>One outdoor unit, multiple indoor units</li>
          <li>Individual room temperature control</li>
          <li>Efficient and flexible</li>
        </ul>
        <p>
          <img src="image/last1.webp" alt="Multi Room Heat Pumps 1" style="width:400px;height:auto;">
          <img src="image/last2.png" alt="Multi Room Heat Pumps 2" style="width:400px;height:auto;">
        </p>        
      `;
      break;
  }

  document.getElementById("main-content").innerHTML = `
    <h2>${service} Services</h2>
    ${details}
    <button onclick="showServices()"><b>Back to Services</b></button>
  `;
}

// About
function showAbout() {
  document.getElementById("main-content").innerHTML = `
    <h2>About Us</h2>
    <p><b>Trusted HVAC specialists with over 16 years of experience, keeping Christchurch homes and businesses comfortable all year round.</b></p>
    <p>We are specialists in sales, installation, repair, and maintenance of heat pumps, air conditioning, heat transfer, and ventilation systems.</p>
    <p>Our team is fully qualified in HVAC and electrical work, holding a refrigerant handler license and current health & safety certifications, giving you complete confidence in the quality, safety, and reliability of our service.</p>
    <p>We deliver professional, customer-focused solutions tailored to your needs. Whether it’s a brand-new system, fast repairs, or regular servicing, our friendly team is here to help.</p>
    <p>Proudly based in Christchurch, we’ve built our reputation on trust, workmanship, and long-term customer care — because your comfort is our priority.</p>
  `;
}

// FAQs
function showFAQs() {
  document.getElementById("main-content").innerHTML = `
<h2>FAQs</h2>

<p><strong>Q.</Strong> How often should I service my air conditioner or heat pump?<br>
<strong>A.</Strong> We recommend servicing your system at least once a year to keep it running efficiently, extend its lifespan, and prevent costly breakdowns.</p>

<p><strong>Q.</Strong> What are the signs my AC/heat pump needs servicing?<br>
<strong>A.</Strong> Common signs include reduced cooling/heating, unusual noises, water leaks, higher power bills, or unpleasant odours. If you notice any of these, it’s time to book a service.</p>

<p><strong>Q.</Strong> How long does a standard service take?<br>
<strong>A.</Strong> Most routine services take between 45–90 minutes, depending on the size and condition of the unit.</p>

<p><strong>Q.</Strong> Do you offer emergency repair services?<br>
<strong>A.</Strong> Yes — if your AC/heat pump breaks down unexpectedly, we can arrange urgent callouts to get your system back up and running quickly.</p>

<p><strong>Q.</Strong> Will regular servicing lower my power bill?<br>
<strong>A.</Strong> Absolutely. A well-maintained system runs more efficiently, which means it uses less power and saves you money in the long run.</p>

<p><strong>Q.</Strong> Can you service all brands of heat pumps and air conditioners?<br>
<strong>A.</Strong> Yes, our technicians are trained to service and repair all major brands and models.</p>

<p><strong>Q.</Strong> Do you provide installation as well as servicing?<br>
<strong>A.</Strong> Yes, we can supply and install new heat pumps and air conditioners, as well as maintain or repair existing systems.</p>

<p><strong>Q.</Strong> Do you offer warranties on your services?<br>
<strong>A.</Strong> Yes, all our servicing and repair work comes with a workmanship guarantee for your peace of mind.</p>
`;
}
// Contact
function showContact() {
  document.getElementById("main-content").innerHTML = `
    <h2>Contact Us</h2>
    <p>Phone:<a href="tel:+64 21 024 24356"> +64 21 024 24356></p></a>
    <p>Email:<a href="email:info@mightyair.co.nz"> info@mightyair.co.nz></p></a>
    <p>Address: 14 Glengeal Drive, Christchurch, New Zealand</p>
    `}
