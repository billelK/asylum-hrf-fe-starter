import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
// import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 35; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
   window.location.href = 'https://www.humanrightsfirst.org/'
  };

  return (
    <div className='flex-c w-[100vw] secondary-c content-around'>
      <section>
        <div className='primary-c flex-c space-between mx-auto'>
            <h1 className='text-6xl py-5 text-white'>Asylum Office Grant Rate Tracker</h1>
            <h3 className='py-5 text-white'>The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions</h3>
        </div>
      </section>
      <section className='flex-c'>
        <div className='flex justify-center pt-10 m-14 gap-20'>
          <div>
          <img className='h-[300px] w-[500px]' src={barGraph} alt="barGraph" />
          <h3 className='py-5 text-2xl'>Search Grant Rates By Office</h3>
          </div>
          <div>
          <img className='h-[300px]' src={pieChart} alt="pieChart" />
          <h3 className='py-5 text-2xl'>Search Grant Rates By Nationality</h3>
          </div>
          <div>
          <img className='h-[300px] w-[500px]' src={lineGraph} alt="lineGraph" />
          <h3 className='py-5 text-2xl'>Search Grant Rates Over Time</h3>
          </div>
        </div>
        <div className='flex justify-center gap-10 pb-10 '>
          <button onClick={() => navigate('/graphs')} className='primary-btn py-2 px-4 text-white font-bold'>View the Data</button>
          
            
            <button onClick={() => downloadCSV()} className='primary-btn py-2 px-4 text-white font-bold'>Download the Data</button>
        </div>
      </section>
      <section className='flex'>
        <div className='p-20 w-[50%] content-center'>
        <img className='w-[100%] h-[70%] rounded-2xl' src={paperStack} alt="paperStack" />
        </div>
        <div className='p-20 w-[50%] content-center'>
        <p className='text-xl'>Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.</p>
        </div>
      </section>
      <section className='flex-c gap-16 align-center pb-10'>
        <h1 className='text-5xl'>Systemic Disparity Insights</h1>
        <div className='flex justify-around gap-10 m-14'>
          <div className='flex-c-1 gap-10'>
            <h1 className='text-4xl'>36%</h1>
            <p className='text-[18px]'>By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 20202.</p>
          </div>
          <div className='flex-c-1 gap-10'>
            <h1 className='text-4xl'>5%</h1>
            <p className='text-[18px]'>The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
          </div>
          <div className='flex-c-1 gap-10'>
            <h1 className='text-4xl'>6x Lower</h1>
            <p className='text-[18px]'>Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.</p>
          </div>
        </div>
          <div>
          <button onClick={() => handleReadMore()} className='primary-c py-2 px-4 w-[120px] text-white'>Read More</button>
          </div>
        <div>
        <button onClick={() => scrollToTop()} className='py-2 px-4'>Back To Top ^</button>
        </div>
      </section>
    </div>
  );
};
