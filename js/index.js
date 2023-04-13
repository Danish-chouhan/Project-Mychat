   // time
   const time = new Date();
   const options1 = { hour: 'numeric', minute: 'numeric', hour12: true };
   document.querySelector('.current-time').textContent = time.toLocaleTimeString('en-US', options1);
   // week 
   const week = new Date()
   const options2 = { weekday: "short" }
   document.querySelector(".current-week").textContent = week.toLocaleDateString('en-US', options2)
   
   // date-month
   const m_d = new Date()
   const options3 ={month : "short",day : "numeric"}
   document.querySelector(".current-month-day").textContent = m_d.toLocaleDateString("en-US",options3)