/* upay Support Suite — one file for customer app + admin console + live chat + AI assistant */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const ADM0=document.body.classList.contains('admin');
let LANG=ADM0?'en':(()=>{try{return localStorage.getItem('upay_lang')==='en'?'en':'bn'}catch(e){return'bn'}})();
const L=(b,e)=>LANG==='en'?e:b;
const bn=n=>LANG==='en'?String(n):String(n).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]);
const money=n=>'৳ '+bn(Number(n).toLocaleString('en-US'));
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fdf=ts=>new Date(ts).toLocaleString(LANG==='en'?'en-GB':'bn-BD',{weekday:'long',day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
const fd=ts=>new Date(ts).toLocaleString(LANG==='en'?'en-GB':'bn-BD',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'});
const EN={"স্টুডেন্ট প্ল্যান":"Student Plan","বাজেট ক্যাটাগরি, অটো ট্রান্সফার":"Budget buckets, auto transfer","ফোন, নাম বা ট্রানজেকশন আইডি দিয়ে খুঁজুন":"Search by phone, name or transaction ID","ব্যালেন্স": "Balance", "কাস্টমার সার্ভিস": "Customer Service", "নোটিফিকেশন": "Notifications", "পেমেন্ট সার্ভিস": "Payment Services", "অ্যাকাউন্ট": "Account", "মোট ব্যালেন্স": "Total Balance", "অ্যাড মানি": "Add Money", "ক্যাশ আউট": "Cash Out", "প্রোফাইল": "Profile", "নাম, ফোন, ইমেইল": "Name, phone, email", "লেনদেন সীমা": "Transaction Limit", "দৈনিক ও মাসিক": "Daily and monthly", "কার্ড ও ব্যাংক": "Cards & Bank", "লিংক করুন": "Link now", "হিস্টরি": "History", "সব": "All", "ইনকাম": "Income", "খরচ": "Expense", "হোম": "Home", "আরো": "More", "QR স্ক্যান": "QR Scan", "‹ ফিরুন": "‹ Back", "সাপোর্ট চ্যাট": "Support Chat", "আপনার সমস্যা লিখুন…": "Describe your problem…", "বার্তা": "Message", "পাঠান": "Send", "রাহিম আহমেদ": "Rahim Ahmed", "প্রোফাইল এডিট শিগগিরই আসছে": "Profile editing is coming soon", "লিমিট: দৈনিক ৳ ৫০,০০০": "Limit: ৳ 50,000 per day", "লিংকড কার্ড নেই": "No linked cards", "প্রোফাইল এডিট": "Edit profile", "আমার upay": "My upay", "সাধারণ": "General", "আরও তথ্য": "More Information", "ভাষা": "Language", "অ্যাকাউন্টের ধরন": "Account Type", "ব্যক্তিগত": "Personal", "শিক্ষার্থী": "Student", "ইসলামিক": "Islamic", "ডার্ক মোড": "Dark Mode", "বন্ধ": "Off", "চালু": "On", "পিন পরিবর্তন": "Change PIN", "পিন পরিবর্তন শিগগিরই আসছে": "PIN change is coming soon", "সিকিউরিটি": "Security", "PIN, বায়োমেট্রিক": "PIN, biometric", "সিকিউরিটি: PIN সক্রিয়": "Security: PIN is active", "মোবাইল অপারেটর পরিবর্তন": "Change Mobile Operator", "মোবাইল অপারেটর পরিবর্তন শিগগিরই আসছে": "Mobile operator change is coming soon", "কেওয়াইসি পুনরায় জমা দিন": "Resubmit KYC", "কেওয়াইসি পুনরায় জমা দেওয়া শিগগিরই আসছে": "KYC resubmission is coming soon", "অনুমোদিত মার্চেন্ট": "Approved Merchants", "অনুমোদিত মার্চেন্ট তালিকা শিগগিরই আসছে": "Approved merchant list is coming soon", "লাইভ চ্যাট, ইমেইল, অভিযোগ": "Live chat, email, complaint", "প্রাইভেসি পলিসি": "Privacy Policy", "প্রাইভেসি পলিসি শিগগিরই আসছে": "Privacy policy is coming soon", "সাধারণ জিজ্ঞাসা": "FAQ", "সাধারণ জিজ্ঞাসা শিগগিরই আসছে": "FAQ is coming soon", "স্টোর সন্ধান": "Find a Store", "স্টোর সন্ধান শিগগিরই আসছে": "Store locator is coming soon", "অ্যাবাউট": "About", "upay সংস্করণ ডেমো ১.০": "upay demo version 1.0", "upay পেইজ": "upay Page", "ওয়েবসাইট": "Website", "সাইন আউট": "Sign Out", "লগআউট ডেমোতে বন্ধ": "Sign out is disabled in the demo", "সেন্ড মানি": "Send Money", "মোবাইল রিচার্জ": "Mobile Recharge", "পে বিল": "Pay Bill", "সঞ্চয়": "Savings", "ফান্ড ট্রান্সফার": "Fund Transfer", "রিকোয়েস্ট মানি": "Request Money", "মেক পেমেন্ট": "Make Payment", "রেফার & আর্ন": "Refer & Earn", "ট্রাফিক ফাইন": "Traffic Fine", "টোল পেমেন্ট": "Toll Payment", "সরকারি পেমেন্ট": "Govt. Payment", "এডুকেশন": "Education", "এনজিও": "NGO", "বীমা": "Insurance", "ডোনেশন": "Donation", "যাকাত পেমেন্ট": "Zakat Payment", "ফ্লাইট": "Flight", "হোটেল": "Hotel", "মুভি": "Movie", "আনলিমিটেড ক্যাশব্যাক": "Unlimited Cashback", "রিচার্জে ৳১০ পর্যন্ত ক্যাশব্যাক": "Up to ৳10 cashback on recharge", "বিল পেমেন্টে অফার": "Bill Payment Offer", "প্রথম বিলে ৫% ছাড়": "5% off your first bill", "রেফার করুন, আর্ন করুন": "Refer and Earn", "বন্ধুকে ডাকুন, ৳৫০ পান": "Invite a friend, get ৳50", "ক্যাশ ইন": "Cash In", "রিসিভ মানি": "Receive Money", "বিদ্যুৎ বিল": "Electricity Bill", "আজ, ১০:৩০": "Today, 10:30", "গতকাল, ৮:১৫": "Yesterday, 8:15", "২৮ সেপ্টেম্বর": "28 September", "২৬ সেপ্টেম্বর": "26 September", "২৪ সেপ্টেম্বর": "24 September", "এইমাত্র": "Just now", "প্রাপকের মোবাইল নম্বর": "Recipient's mobile number", "মোবাইল নম্বর": "Mobile number", "এজেন্ট নম্বর": "Agent number", "ব্যাংক/কার্ড নম্বর": "Bank/card number", "বিলার/অ্যাকাউন্ট নম্বর": "Biller/account number", "মার্চেন্ট নম্বর": "Merchant number", "ব্যাংক অ্যাকাউন্ট নম্বর": "Bank account number", "যার কাছে চাইবেন তার নম্বর": "Number of the person you are requesting from", "টাকার পরিমাণ": "Amount", "নিশ্চিত করুন": "Confirm", "বাতিল": "Cancel", "নম্বর দিন": "Enter the number", "সঠিক পরিমাণ দিন": "Enter a valid amount", "ব্যালেন্স পর্যাপ্ত নয়": "Insufficient balance", "আপনার অ্যাকাউন্ট ফ্রিজ করা আছে": "Your account is frozen", "সমস্যা হয়েছে, আবার চেষ্টা করুন": "Something went wrong. Please try again", "আপনার অ্যাকাউন্ট ফ্রিজ করা হয়েছে": "Your account has been frozen", "নতুন কোনো নোটিফিকেশন নেই": "No new notifications", "নতুন ঘোষণা": "New announcement", "QR স্ক্যান করুন": "Scan QR", "স্ক্যান সিমুলেট করুন": "Simulate scan", "বন্ধ করুন": "Close", "কিছু জানতে চান? এখানে লিখুন। সাধারণ প্রশ্নের উত্তর সাথে সাথে পাবেন, বাকিগুলো আমাদের টিম দেখবে।": "Have a question? Write it here. Common questions get an instant answer; our team will look at the rest.", "সহকারী": "Assistant", "এজেন্ট": "Agent", "আপনার বার্তা আমাদের টিমের কাছে পাঠানো হয়েছে। শীঘ্রই উত্তর পাবেন।": "Your message has been sent to our team. You will get a reply soon.", "ইমেইল করুন": "Send an Email", "অভিযোগ জানান": "Submit a Complaint", "আমার অনুরোধ": "My Requests", "লাইভ চ্যাট": "Live Chat", "এখনই আমাদের সাথে কথা বলুন": "Talk to us right now", "চ্যাট না করে ইমেইলে জানান": "Tell us by email instead of chat", "ছবি বা ভয়েসসহ সমস্যা জমা দিন": "Submit a problem with a photo or voice note", "ইমেইল ও অভিযোগের অবস্থা দেখুন": "Check the status of your emails and complaints", "জরুরি অবস্থায় (প্রতারণা, ভুল লেনদেন) অভিযোগ বা লাইভ চ্যাট ব্যবহার করুন। পিন বা ওটিপি কাউকে দেবেন না।": "In an emergency (fraud, wrong transaction) use a complaint or live chat. Never share your PIN or OTP with anyone.", "আপনার ইমেইল (উত্তর পেতে, ঐচ্ছিক)": "Your email (to get a reply, optional)", "বিষয়": "Subject", "বিস্তারিত": "Details", "ইমেইল পাঠান": "Send Email", "আপনার উত্তর এই অ্যাপের \"আমার অনুরোধ\"-এ দেখতে পাবেন।": "You will see the reply under \"My Requests\" in this app.", "অভিযোগের ধরন": "Complaint type", "ট্রানজেকশন আইডি (থাকলে)": "Transaction ID (if any)", "সমস্যাটি বলুন": "Describe the problem", "কী হয়েছে, কখন হয়েছে…": "What happened, and when…", "📷 ছবি যোগ করুন": "📷 Add photo", "🎤 ভয়েস রেকর্ড": "🎤 Record voice", "অভিযোগ জমা দিন": "Submit Complaint", "ছবি বা ভয়েস ঐচ্ছিক। ভয়েস সর্বোচ্চ ৪৫ সেকেন্ড।": "Photo or voice is optional. Voice is limited to 45 seconds.", "ট্রানজেকশন সমস্যা": "Transaction problem", "ভুল নম্বরে টাকা পাঠানো": "Money sent to wrong number", "প্রতারণা / স্ক্যাম": "Fraud / scam", "অ্যাকাউন্ট লক বা পিন সমস্যা": "Account lock or PIN problem", "অ্যাপ বা সার্ভিস সমস্যা": "App or service problem", "অন্যান্য": "Other", "নতুন": "New", "প্রক্রিয়াধীন": "In progress", "সমাধান হয়েছে": "Resolved", "ইমেইল": "Email", "অভিযোগ": "Complaint", "এখনো কিছু জমা দেননি।": "You have not submitted anything yet.", "সংযুক্ত ছবি": "Attached photo", "মুছুন": "Remove", "থামুন": "Stop", "⏹ থামুন": "⏹ Stop", "এই ব্রাউজারে ভয়েস রেকর্ড চলবে না": "Voice recording is not supported in this browser", "রেকর্ডিং বড় হয়ে গেছে, ছোট করে আবার দিন": "Recording is too large. Please record a shorter one", "মাইক্রোফোনের অনুমতি পাওয়া যায়নি": "Microphone permission was not granted", "বিষয় ও বিস্তারিত লিখুন": "Enter a subject and details", "ইমেইল ঠিকানা ঠিক নয়": "The email address is not valid", "ইমেইল পাঠানো হয়েছে ✓": "Email sent ✓", "পাঠানো যায়নি, আবার চেষ্টা করুন": "Could not send. Please try again", "আগে রেকর্ডিং থামান": "Stop the recording first", "সমস্যা লিখুন, অথবা ছবি/ভয়েস দিন": "Describe the problem, or add a photo/voice note", "ফাইল বড় হওয়ায় জমা হয়নি। ছোট ছবি/ভয়েস দিন": "The file was too large to submit. Use a smaller photo/voice note", "ছবিটি পড়া যায়নি": "Could not read the photo", "সাধারণ ব্যবহারের জন্য": "For everyday use", "ইসলামিক অ্যাকাউন্টে স্যুইচ করুন": "Switch to an Islamic account", "যাচাই করা হয়েছে": "Verified", "অনুমোদনের অপেক্ষায়": "Waiting for approval", "আবেদন প্রত্যাখ্যাত, আবার আবেদন করুন": "Application rejected. You can apply again", "ইডু মেইল ও ভার্সিটি আইডি কার্ড লাগবে": "Needs a university (edu) email and university ID card", "অপেক্ষমাণ": "Pending", "বাংলা": "Bangla", "শিক্ষার্থী অ্যাকাউন্ট": "Student Account", "শিক্ষা প্রতিষ্ঠানের ইমেইল (edu mail)": "University email (edu mail)", "বিশ্ববিদ্যালয়ের নাম": "University name", "স্টুডেন্ট আইডি নম্বর": "Student ID number", "ভার্সিটি আইডি কার্ডের ছবি": "Photo of your university ID card", "আইডি কার্ড হাতে সেলফি": "Selfie holding your ID card", "আমি নিশ্চিত করছি যে সব তথ্য সঠিক": "I confirm that all the information is correct", "আবেদন পাঠান": "Submit Application", "আগের আবেদন প্রত্যাখ্যান করা হয়েছে": "Your previous application was rejected", "কারণ:": "Reason:", "শিক্ষা প্রতিষ্ঠানের (edu) ইমেইল দিন": "Enter your university (edu) email", "বিশ্ববিদ্যালয়ের নাম লিখুন": "Enter your university name", "স্টুডেন্ট আইডি নম্বর দিন": "Enter your student ID number", "আইডি কার্ডের ছবি দিন": "Add a photo of your ID card", "আইডি কার্ড হাতে সেলফি দিন": "Add a selfie holding your ID card", "তথ্য সঠিক বলে নিশ্চিত করুন": "Please confirm the information is correct", "আবেদন পাঠানো হয়েছে ✓": "Application sent ✓", "ফাইল বড় হওয়ায় জমা হয়নি। ছোট ছবি দিন": "The file was too large. Use a smaller photo", "এখন সম্ভব নয়": "Not available right now", "🎓 আপনার শিক্ষার্থী অ্যাকাউন্ট অনুমোদিত হয়েছে": "🎓 Your student account has been approved", "আপনার শিক্ষার্থী অ্যাকাউন্টের আবেদন গৃহীত হয়নি": "Your student account application was not approved", "আবেদন বাতিল হয়েছে": "Application cancelled", "আপনার আবেদন অ্যাডমিনের কাছে পাঠানো হয়েছে। অনুমোদন হলে অ্যাকাউন্ট চালু হবে।": "Your application has been sent to the admin. Your student account will start once it is approved.", "আবেদন বাতিল করুন": "Cancel application"};
const tr=s=>LANG==='en'&&EN[s]!==undefined?EN[s]:s;
const en=s=>EN[s]!==undefined?EN[s]:s;
function tx8(root){
  if(LANG!=='en'||!root)return;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),ns=[];while(w.nextNode())ns.push(w.currentNode);
  ns.forEach(n=>{const v=n.nodeValue,t=v.trim();if(t&&EN[t]!==undefined&&!(n.parentElement&&n.parentElement.closest('[translate="no"]')))n.nodeValue=v.replace(t,EN[t])});
  root.querySelectorAll('[placeholder],[aria-label],[alt]').forEach(e=>['placeholder','aria-label','alt'].forEach(a=>{const v=e.getAttribute(a);if(v&&EN[v]!==undefined)e.setAttribute(a,EN[v])}));
}
const shrinkImg=(f,mx=900)=>new Promise((ok,no)=>{const r=new FileReader();r.onerror=no;r.onload=()=>{const im=new Image();im.onerror=no;im.onload=()=>{const k=Math.min(1,mx/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);ok(c.toDataURL('image/jpeg',.65))};im.src=r.result};r.readAsDataURL(f)});
/* Student account: default rules (admin can change them in the console) */
const STU_DEF={
 guide_en:'The student account is for currently enrolled university students. You must provide: your university email (edu mail), your university name, your student ID number and a clear photo of your university ID card (front side, all text readable). Our team will review your request and the result will appear in the app.',
 guide_bn:'শিক্ষার্থী অ্যাকাউন্ট শুধু বর্তমানে অধ্যয়নরত বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য। আপনাকে দিতে হবে: বিশ্ববিদ্যালয়ের ইমেইল (edu mail), বিশ্ববিদ্যালয়ের নাম, স্টুডেন্ট আইডি নম্বর এবং আইডি কার্ডের পরিষ্কার ছবি (সামনের দিক, সব লেখা পড়া যায় এমন)। আমাদের টিম আপনার আবেদন যাচাই করবে এবং ফলাফল অ্যাপে জানানো হবে।',
 domains:'edu, ac',req:{email:true,uni:true,sid:true,card:true,selfie:false}};
const eduOk=(domains,em)=>{const ds=String(domains||'').split(/[\s,]+/).filter(Boolean).map(d=>d.toLowerCase().replace(/^\./,''));if(!ds.length)return true;const h=(String(em).split('@')[1]||'').toLowerCase(),ls=h.split('.');return ds.some(d=>d.includes('.')?(h===d||h.endsWith('.'+d)):ls.includes(d))};


/* ---------- AI assistant logic (from the Message Assistant project) ---------- */
const KB={
failed_txn:{label:"Failed or pending transaction",auto:1,team:"Payments Ops",pri:"high",
 kw:["failed","pending","deducted","not received","taka kete","kete nise","টাকা কেটে","কেটে নিয়েছে","পেন্ডিং","ব্যর্থ"],
 en:e=>`Sorry for the trouble. If money was deducted but the transaction failed, it is normally returned to your wallet automatically within 24 hours. ${e.txn?"We have noted transaction "+e.txn+".":"Please reply with your transaction ID so we can check."} Never share your PIN or OTP with anyone.`,
 bn:e=>`অসুবিধার জন্য দুঃখিত। টাকা কেটে গিয়ে লেনদেন ব্যর্থ হলে সাধারণত ২৪ ঘণ্টার মধ্যে স্বয়ংক্রিয়ভাবে ওয়ালেটে ফেরত আসে। ${e.txn?"আপনার লেনদেন "+e.txn+" আমরা নোট করেছি।":"অনুগ্রহ করে আপনার ট্রানজেকশন আইডি পাঠান।"} কারো সাথে আপনার পিন বা ওটিপি শেয়ার করবেন না।`},
wrong_number:{label:"Money sent to wrong number",auto:0,team:"Dispute Desk",pri:"high",
 kw:["wrong number","by mistake","vul number","vul e","ভুল নম্বর","ভুল নাম্বার","ভুলে পাঠ"],
 en:e=>`We are sorry. A completed transfer cannot be reversed automatically, so our dispute team will review your case. Please share the transaction ID and the number you sent to.`,
 bn:e=>`আমরা দুঃখিত। সম্পন্ন হওয়া লেনদেন স্বয়ংক্রিয়ভাবে ফেরত দেওয়া যায় না, তাই আমাদের ডিসপিউট টিম আপনার বিষয়টি দেখবে। অনুগ্রহ করে ট্রানজেকশন আইডি এবং যে নম্বরে পাঠিয়েছেন তা জানান।`},
pin_reset:{label:"Forgot PIN",auto:1,team:"Account Support",pri:"normal",
 kw:["forgot pin","forget pin","reset pin","pin vule","pin bhule","পিন ভুলে","পিন রিসেট","পিন মনে নেই"],
 en:e=>`To reset your PIN, open the upay app, tap "Forgot PIN" and follow the steps. upay will never ask you for your PIN or OTP.`,
 bn:e=>`পিন রিসেট করতে upay অ্যাপ খুলে "পিন ভুলে গেছি" চাপুন এবং ধাপগুলো অনুসরণ করুন। upay কখনো আপনার পিন বা ওটিপি চায় না।`},
scam:{label:"Scam or fraud report",auto:0,team:"Fraud Team",pri:"urgent",esc:1,
 kw:["scam","fraud","hacked","asked for otp","otp chaise","fon korse","ওটিপি চেয়ে","প্রতারণা","ফোন করে","lottery","prize","পুরস্কার"],
 en:e=>`Thank you for reporting this. Please do not share your PIN or OTP and do not send any money. We have passed this to our fraud team and they will contact you through the app.`,
 bn:e=>`জানানোর জন্য ধন্যবাদ। অনুগ্রহ করে পিন বা ওটিপি কাউকে দেবেন না এবং কোনো টাকা পাঠাবেন না। বিষয়টি আমাদের ফ্রড টিমকে জানানো হয়েছে, তারা অ্যাপের মাধ্যমে আপনার সাথে যোগাযোগ করবে।`},
fees:{label:"Fees and charges",auto:1,team:"Customer Care",pri:"normal",
 kw:["fee","charge","charges","চার্জ","koto charge","কত কাটবে"],
 en:e=>`Fees depend on the service and the amount. You can see the exact fee on the confirmation screen before you pay, and in the fee list inside the app.`,
 bn:e=>`ফি নির্ভর করে সেবা ও পরিমাণের উপর। পেমেন্টের আগে কনফার্মেশন স্ক্রিনে এবং অ্যাপের ফি তালিকায় সঠিক ফি দেখতে পাবেন।`},
howto:{label:"How to use a service",auto:1,team:"Customer Care",pri:"normal",
 kw:["how to","how do i","kivabe","কীভাবে","কিভাবে"],
 en:e=>`You can do this from the home screen of the app. Tell us which service you need (send money, cash-out, or add money) and we will guide you step by step.`,
 bn:e=>`অ্যাপের হোম স্ক্রিন থেকেই এটি করা যায়। কোন সেবা দরকার (সেন্ড মানি, ক্যাশ আউট, অ্যাড মানি) জানালে ধাপে ধাপে সাহায্য করব।`},
locked:{label:"Account locked or blocked",auto:0,team:"Account Support",pri:"high",
 kw:["locked","blocked","account lock","লক","ব্লক"],
 en:e=>`We are sorry your account is locked. For your safety, a team member will verify your identity and help you. Please do not share your PIN or OTP.`,
 bn:e=>`আপনার অ্যাকাউন্ট লক হওয়ায় আমরা দুঃখিত। নিরাপত্তার জন্য একজন টিম সদস্য আপনার পরিচয় যাচাই করে সাহায্য করবেন। অনুগ্রহ করে পিন বা ওটিপি কাউকে দেবেন না।`},
unknown:{label:"Unclear request",auto:0,team:"Support Agents",pri:"normal",kw:[],
 en:e=>`Thank you for contacting upay. A support agent will reply to you shortly.`,
 bn:e=>`upay-এর সাথে যোগাযোগ করার জন্য ধন্যবাদ। একজন সাপোর্ট এজেন্ট শীঘ্রই আপনাকে উত্তর দেবেন।`}};
const BN=/[\u0980-\u09FF]/;
function analyze0(raw){
 const t=raw.toLowerCase(),flags=[],ent={};
 const sens=/(pin|otp|পিন|ওটিপি)\D{0,12}(\d{4,6})/i.test(raw);if(sens)flags.push("Customer typed a PIN or OTP");
 let shown=raw.replace(/(pin|otp|পিন|ওটিপি)(\D{0,12})(\d{4,6})/gi,"$1$2••••").replace(/\b(01\d)(\d{5})(\d{3})\b/g,"$1••••• $3".replace(" ",""));
 if(/\b01\d{9}\b/.test(raw))ent.phone="masked";
 const am=raw.match(/(?:৳|tk\.?|taka|টাকা)\s?([\d,]+)|([\d,]+)\s?(?:৳|tk|taka|টাকা)/i);if(am)ent.amount="৳"+(am[1]||am[2]);
 const tx=raw.match(/\b(?=[A-Z0-9]*\d)(?=[A-Z0-9]*[A-Z])[A-Z0-9]{8,12}\b/);if(tx)ent.txn=tx[0];
 const sc=Object.entries(KB).filter(([k])=>k!=="unknown").map(([k,v])=>[k,v.kw.filter(w=>t.includes(w))]).sort((a,b)=>b[1].length-a[1].length);
 const top=sc[0][1].length?sc[0]:["unknown",[]],intent=top[0],kb=KB[intent],hits=top[1];
 const conf=intent==="unknown"?.3:Math.min(.95,.55+.2*hits.length);
 const bn=BN.test(raw)||hits.some(w=>/^[a-z ]+$/.test(w)&&["taka kete","kete nise","vul number","vul e","pin vule","pin bhule","otp chaise","fon korse","kivabe","koto charge"].includes(w));
 const lang=BN.test(raw)?"Bangla":bn?"Bangla (romanized)":"English";
 let reply=(bn?kb.bn:kb.en)(ent);
 if(sens)reply+=bn?" আপনি বার্তায় গোপন কোড লিখেছেন। অনুগ্রহ করে এটি আর কাউকে দেবেন না।":" You typed a secret code in your message. Please never share it with anyone.";
 let dec=kb.esc?"escalated":(kb.auto&&conf>=.7&&!sens)?"auto_sent":"needs_review";
 return{shown,intent,hits,conf,lang,reply,ent,flags,dec,team:kb.team,pri:kb.pri,policy:kb.label};}
const SW=new Set(["the","is","are","an","to","of","do","i","my","can","what","and","in","for","on","it","me","you","your","please","এবং","কি","কী","আমি","আমার"]);
const tok=t=>new Set((t.toLowerCase().match(/[\u0980-\u09FFa-z0-9]+/g)||[]).filter(w=>w.length>1&&!SW.has(w)));
function faqMatch(raw,FAQS){const A=tok(raw);let best=null;FAQS.forEach(f=>[f.q,...f.alt].forEach(p=>{const B=tok(p);if(!B.size)return;const sh=[...B].filter(w=>A.has(w)),d=2*sh.length/(A.size+B.size),c=B.size>=2?sh.length/B.size*.8:0,sc=Math.max(d,c);if(sc>=.5&&(!best||sc>best.s))best={f,s:sc,sh}}));return best}
function analyze(raw,FAQS=[]){const r=analyze0(raw),m=faqMatch(raw,FAQS);if(!m||r.intent==="scam")return r;
 const sens=r.flags.length>0;let reply=m.f.a;if(sens)reply+=BN.test(m.f.a)?" আপনি বার্তায় গোপন কোড লিখেছেন। অনুগ্রহ করে এটি আর কাউকে দেবেন না।":" You typed a secret code in your message. Please never share it with anyone.";
 return{...r,intent:"faq",policy:"FAQ: "+m.f.q,hits:m.sh,conf:Math.min(.97,.45+m.s*.6),reply,dec:m.f.auto&&!sens?"auto_sent":"needs_review",team:"Customer Care",pri:"normal"}}

const ts=()=>new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
function makeMessage(text,id,faqs){const a=analyze(text,faqs),t=ts();return{id,who:'Customer c_'+(88000+id*37),text,a,at:t,status:a.dec,out:a.dec==='auto_sent'?a.reply:null,draft:a.reply,audit:['Received '+t,'Redacted and analyzed','Matched policy: '+a.policy,'Decision: '+a.dec.replace('_',' ')+(a.dec==='auto_sent'?' and reply sent':'')]}}


/* ---------- Shared storage (localStorage + cross-tab sync). Swap with a real API later. ---------- */
function makeDb(){
  const K='upay_db',rd=()=>{try{return JSON.parse(localStorage.getItem(K)||'{}')}catch(e){return{}}},wr=o=>{try{localStorage.setItem(K,JSON.stringify(o));return true}catch(e){return false}};
  const subs=new Set(),fire=()=>subs.forEach(f=>{try{f()}catch(e){console.error(e)}}),clone=x=>x===undefined?x:JSON.parse(JSON.stringify(x));
  addEventListener('storage',e=>{if(e.key===K)fire()});
  const snap=(p,o)=>({id:p.split('/').pop(),exists:o!==undefined,data:()=>clone(o)});
  const listen=(get,cb)=>{const run=()=>cb(get());subs.add(run);run();return()=>subs.delete(run)};
  const ref=p=>({id:p.split('/').pop(),path:p,
    get:async()=>snap(p,rd()[p]),
    set:async d=>{const o=rd();o[p]=clone(d);if(!wr(o))throw{code:'quota'};fire()},
    update:async d=>{const o=rd();if(o[p]===undefined)throw{code:'not_found'};o[p]={...o[p],...clone(d)};if(!wr(o))throw{code:'quota'};fire()},
    delete:async()=>{const o=rd();delete o[p];wr(o);fire()},
    onSnapshot:cb=>listen(()=>snap(p,rd()[p]),cb)});
  const col=(c,flt=[])=>{
    const qs=()=>{const o=rd(),docs=Object.keys(o).filter(k=>k.startsWith(c+'/')&&!k.slice(c.length+1).includes('/')).filter(k=>flt.every(([f,v])=>o[k][f]===v)).map(k=>snap(k,o[k]));return{docs,size:docs.length,empty:!docs.length}};
    return{doc:id=>ref(c+'/'+id),where:(f,op,v)=>col(c,[...flt,[f,v]]),get:async()=>qs(),onSnapshot:cb=>listen(qs,cb)}};
  return{collection:n=>col(n),doc:p=>ref(p)};
}
if(!window.claude){
  const ADM=document.body.classList.contains('admin'),P=new URLSearchParams(location.search);
  let id=P.get('u')||localStorage.getItem('upay_uid')||('c'+Math.random().toString(36).slice(2,8));
  try{localStorage.setItem('upay_uid',id)}catch(e){}
  const nm=P.get('n')||(L('গ্রাহক ','Customer ')+id.slice(-4)),DB=makeDb();
  window.claude={use:async n=>n==='db'?DB:n==='user'?{id:async()=>id,me:async()=>({name:nm}),canEdit:async()=>ADM,isOwner:async()=>ADM}:null};
}

/* ---------- Customer app ---------- */
function initCustomer(){
  let balance=12500,shown=false,plan={buckets:[],rules:[],saved:[]},hq='',curAcct='personal',curVerified=false;
  let tx=[
   {t:'ক্যাশ ইন',d:'আজ, ১০:৩০',a:5000,k:'in'},
   {t:'মোবাইল রিচার্জ',d:'গতকাল, ৮:১৫',a:-249,k:'out'},
   {t:'সেন্ড মানি',d:'২৮ সেপ্টেম্বর',a:-1500,k:'out'},
   {t:'রিসিভ মানি',d:'২৬ সেপ্টেম্বর',a:2000,k:'in'},
   {t:'বিদ্যুৎ বিল',d:'২৪ সেপ্টেম্বর',a:-860,k:'out'}];
  const main=[['সেন্ড মানি','💸','#d9efff'],['মোবাইল রিচার্জ','📱','#d9efff'],['ক্যাশ আউট','🏧','#ffe6d0'],['পে বিল','🧾','#d9efff'],
   ['অ্যাড মানি','➕','#e6e1f7'],['সঞ্চয়','👛','#fff0c2'],['ফান্ড ট্রান্সফার','🏦','#d9efff'],['রিকোয়েস্ট মানি','💬','#d6f5ee'],
   ['মেক পেমেন্ট','▦','#e8f3ff'],['রেফার & আর্ন','🎁','#ffe0ea']];
  const pay=[['ট্রাফিক ফাইন','🚦','#dff5e3'],['টোল পেমেন্ট','🛣️','#e6ecf5'],['সরকারি পেমেন্ট','🏛️','#ffe3e3'],['এডুকেশন','🎓','#e6e1f7'],
   ['এনজিও','🤲','#fff0c2'],['বীমা','🛡️','#d6f5ee'],['ডোনেশন','🙏','#ffe6d0'],['যাকাত পেমেন্ট','🕌','#dff5e3'],
   ['ফ্লাইট','✈️','#d9efff'],['হোটেল','🏨','#d6f5ee'],['মুভি','🎬','#ffe0ea'],['আরো','⋯','#eee']];
  const mk=(a,el)=>{$(el).innerHTML=a.map(([n,i,c])=>`<button class="it" data-s="${n}"><div class="ic" style="background:${c}">${i}</div>${tr(n)}</button>`).join('')};
  mk(main,'#g1');mk(pay,'#g2');
  
  // banners
  const bs=[['linear-gradient(120deg,#0b4aa2,#2b7be0)','আনলিমিটেড ক্যাশব্যাক','রিচার্জে ৳১০ পর্যন্ত ক্যাশব্যাক'],['linear-gradient(120deg,#c2185b,#ef5b8f)','বিল পেমেন্টে অফার','প্রথম বিলে ৫% ছাড়'],['linear-gradient(120deg,#0f7a5a,#35b88a)','রেফার করুন, আর্ন করুন','বন্ধুকে ডাকুন, ৳৫০ পান']];
  $('#ban').innerHTML=bs.map((b,i)=>`<div class="slide${i?'':' on'}" style="background:${b[0]}"><h3>${tr(b[1])}</h3><p>${tr(b[2])}</p></div>`).join('');
  $('#dots').innerHTML=bs.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('');
  let bi=0;const sl=$$('.slide'),dt=$$('#dots i');
  const go=i=>{bi=(i+3)%3;sl.forEach((s,k)=>s.classList.toggle('on',k==bi));dt.forEach((s,k)=>s.classList.toggle('on',k==bi))};
  setInterval(()=>go(bi+1),3500);$('#ban').onclick=()=>go(bi+1);
  
  // tabs
  function tab(n){$$('.view').forEach(v=>v.classList.toggle('on',v.id=='v-'+n));$$('.nav .t').forEach(b=>b.classList.toggle('on',b.dataset.tab==n));$('#v-'+n).scrollTop=0}
  $$('.nav .t').forEach(b=>b.onclick=()=>tab(b.dataset.tab));
  
  // toast
  let tt;function toast(m){const t=$('#toast');t.textContent=tr(m);t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),1800)}
  $$('[data-toast]').forEach(e=>e.onclick=()=>toast(e.dataset.toast));
  $('#chatBtn').onclick=()=>window.openCS&&window.openCS();
  $('#supRow').onclick=()=>window.openCS&&window.openCS();
  $('#bell').onclick=()=>toast('নতুন কোনো নোটিফিকেশন নেই');
  
  // balance
  function paintBal(){$('#balBtn').textContent=shown?money(balance):tr('ব্যালেন্স');$('#accBal').textContent=money(balance)}
  $('#balBtn').onclick=()=>{shown=!shown;paintBal();if(shown)setTimeout(()=>{shown=false;paintBal()},4000)};
  
  // history
  let flt='all';
  function paintHis(){const q=hq.trim().toLowerCase();
   $('#hlist').innerHTML=tx.filter(x=>(flt=='all'||x.k==flt)&&(!q||[x.t,x.ph,x.rn,x.trx].some(v=>String(v||'').toLowerCase().includes(q)))).map(x=>`<div class="row"><span>${x.k=='in'?'⬇️':'⬆️'}</span><div class="g">${tr(x.t)}${x.rn||x.ph?' · '+esc(x.rn||x.ph):''}<small>${x.ts?fdf(x.ts):tr(x.d)}</small>${x.ph?`<small>${esc(x.ph)}${x.rn&&x.rn!==x.ph?' · '+esc(x.rn):''}${x.trx?' · ID: '+esc(x.trx):''}</small>`:''}${x.fee?`<small>${L('চার্জ','Fee')}: ${money(x.fee)}</small>`:''}${x.src?`<small>${L('ক্যাটাগরি','Bucket')}: ${esc(x.src)}</small>`:''}</div><span class="${x.a>0?'pos':'neg'}">${x.a>0?'+':'−'}${money(Math.abs(x.a))}</span></div>`).join('')}
  $('#hq').oninput=e=>{hq=e.target.value;paintHis()};
  $$('[data-f]').forEach(b=>b.onclick=()=>{flt=b.dataset.f;$$('[data-f]').forEach(c=>c.classList.toggle('on',c==b));paintHis()});
  
  // sheet
  const sheet=$('#sheet'),panel=$('#panel');
  const close=()=>sheet.classList.remove('on');
  sheet.onclick=e=>{if(e.target==sheet)close()};
  function open(h){panel.innerHTML=h;tx8(panel);sheet.classList.add('on')}
  const isStu=()=>curAcct==='student'&&curVerified;
  const freeBal=()=>balance-(plan.buckets||[]).reduce((s,b)=>s+b.amt,0);
  const feeOf=(t,a)=>t==='ক্যাশ আউট'?Math.round(a*0.0185*(isStu()?0.8:1)*100)/100:0;
  const trx=()=>'UP'+Date.now().toString(36).toUpperCase()+Math.random().toString(36).slice(2,4).toUpperCase();
  const nameOf=p=>((plan.saved||[]).find(s=>s.phone===p)||{}).name||'';
  const moneyForm=(title,sign,label,ph)=>{const out=sign<0,bk=isStu()&&out?plan.buckets:[];
   open(`<h3>${title}</h3><input id="f1" inputmode="numeric" placeholder="${ph}"><input id="f2" inputmode="numeric" placeholder="টাকার পরিমাণ">${bk.length?`<select id="f3"><option value="">${L('খালি ব্যালেন্স','Free balance')} (${money(freeBal())})</option>${bk.map((b,i)=>`<option value="${i}">${esc(b.n)} (${money(b.amt)})</option>`).join('')}</select>`:''}${out?'<small id="fee"></small>':''}<button class="btn" id="ok">নিশ্চিত করুন</button><button class="btn alt" id="no">বাতিল</button>`);
   const pf=()=>{const e=$('#fee');if(!e)return;const a=parseInt($('#f2').value)||0,f=feeOf(title,a);
    e.textContent=title==='ক্যাশ আউট'?L('চার্জ: ','Fee: ')+money(f)+(isStu()?L(' (স্টুডেন্ট ২০% ছাড় সহ)',' (incl. 20% student discount)'):''):title==='সেন্ড মানি'?L('চার্জ: ৳ ০ (ফ্রি)','Fee: ৳ 0 (free)'):''};
   $('#f2').oninput=pf;pf();$('#no').onclick=close;
   $('#ok').onclick=()=>{const p=$('#f1').value.trim(),a=parseInt($('#f2').value);
    if(!p&&out){toast('নম্বর দিন');return}
    if(!a||a<=0){toast('সঠিক পরিমাণ দিন');return}
    const fee=out?feeOf(title,a):0,tot=a+fee,si=$('#f3')?$('#f3').value:'',pl=JSON.parse(JSON.stringify(plan)),m={amt:a,fee,ph:p,rn:out?nameOf(p):'',trx:trx()};
    if(out){if(si!==''){if(tot>pl.buckets[si].amt){toast('ব্যালেন্স পর্যাপ্ত নয়');return}pl.buckets[si].amt-=tot;m.src=pl.buckets[si].n;m.plan=pl}
     else if(tot>freeBal()){toast('ব্যালেন্স পর্যাপ্ত নয়');return}}
    commit(title,sign*tot,m).then(ok=>{if(ok){close();toast(L(title+' সফল হয়েছে ✓',tr(title)+' successful ✓'));if(!out)fireRules(true)}})}};
  const forms={'সেন্ড মানি':()=>moneyForm('সেন্ড মানি',-1,'out','প্রাপকের মোবাইল নম্বর'),
   'মোবাইল রিচার্জ':()=>moneyForm('মোবাইল রিচার্জ',-1,'out','মোবাইল নম্বর'),
   'ক্যাশ আউট':()=>moneyForm('ক্যাশ আউট',-1,'out','এজেন্ট নম্বর'),
   'অ্যাড মানি':()=>moneyForm('অ্যাড মানি',1,'in','ব্যাংক/কার্ড নম্বর'),
   'পে বিল':()=>moneyForm('পে বিল',-1,'out','বিলার/অ্যাকাউন্ট নম্বর'),
   'মেক পেমেন্ট':()=>moneyForm('মেক পেমেন্ট',-1,'out','মার্চেন্ট নম্বর'),
   'ফান্ড ট্রান্সফার':()=>moneyForm('ফান্ড ট্রান্সফার',-1,'out','ব্যাংক অ্যাকাউন্ট নম্বর'),
   'রিকোয়েস্ট মানি':()=>moneyForm('রিকোয়েস্ট মানি',1,'in','যার কাছে চাইবেন তার নম্বর')};
  $$('.it').forEach(b=>b.onclick=()=>{const n=b.dataset.s;(forms[n]||(()=>toast(L(n+' শিগগিরই আসছে',tr(n)+' is coming soon'))))()});
  $$('[data-act]').forEach(b=>b.onclick=()=>forms[b.dataset.act==='Add Money'?'অ্যাড মানি':'ক্যাশ আউট']());
  
  // QR
  $('#qrBtn').onclick=()=>{open(`<h3>QR স্ক্যান করুন</h3><div class="scan"><i></i></div><button class="btn" id="sc">স্ক্যান সিমুলেট করুন</button><button class="btn alt" id="no">বন্ধ করুন</button>`);
   $('#no').onclick=close;$('#sc').onclick=()=>{close();setTimeout(()=>forms['মেক পেমেন্ট'](),150)}};
  
  // theme
  function theme(d){document.documentElement.dataset.theme=d?'dark':'light';$('#themeState').textContent=tr(d?'চালু':'বন্ধ')}
  let dark=matchMedia('(prefers-color-scheme: dark)').matches;theme(dark);
  $('#themeRow').onclick=()=>{dark=!dark;theme(dark)};
  let sync=null,uid=null,frozen=false,isAdm=false,admOn=false,admTab='u',allW=[],allT=[],lastNote=0;
  let busyF=false;
  async function fireRules(arm){if(busyF||!sync||!uid||!isStu())return;busyF=true;try{
   const pl=JSON.parse(JSON.stringify(plan)),now=Date.now();let bal=freeBal(),ch=false;
   for(const r of pl.rules){if(r.done)continue;if(arm&&!r.armed){r.armed=1;ch=true}
    if(!r.armed||(r.at&&new Date(r.at).getTime()>now)||r.amt>bal)continue;
    if(!(await commit(L('অটো সেন্ড মানি','Auto Send Money'),-r.amt,{amt:r.amt,fee:0,ph:r.phone,rn:r.name,trx:trx(),auto:1})))continue;
    bal-=r.amt;r.done=now;ch=true}
   if(ch)await sync.wallets.doc(uid).update({plan:pl})}finally{busyF=false}}
  function planInit(){
   const cp=()=>JSON.parse(JSON.stringify(plan));
   const save=async p=>{try{await sync.wallets.doc(uid).update({plan:p});return true}catch(e){toast('সমস্যা হয়েছে, আবার চেষ্টা করুন');return false}};
   function ui(){const bs=plan.buckets,rs=plan.rules;
    open(`<h3>🎓 ${L('স্টুডেন্ট প্ল্যান','Student Plan')}</h3><small>${L('খালি ব্যালেন্স','Free balance')}: <b>${money(freeBal())}</b></small>
    <h4>${L('ক্যাটাগরি অনুযায়ী টাকা জমা','Money buckets')}</h4>
    ${bs.map((b,i)=>`<div class="row"><div class="g">${esc(b.n)}<small>${money(b.amt)}</small></div><button class="mini" data-bd="${i}">✕</button></div>`).join('')}
    <input id="bn" placeholder="${L('যেমন: ভার্সিটি, খাওয়া, রিচার্জ','e.g. University, Food, Recharge')}"><input id="ba" inputmode="numeric" placeholder="${L('টাকা','Amount')}"><button class="btn" id="bad">${L('জমা রাখুন','Set aside')}</button>
    <h4>${L('অটো ট্রান্সফার (টাকা আসার পর নিজে থেকে যাবে)','Auto transfer (sends when money arrives)')}</h4>
    ${rs.map((r,i)=>`<div class="row"><div class="g">${esc(r.name||r.phone)} · ${money(r.amt)}<small>${esc(r.phone)} · ${r.at?fdf(new Date(r.at).getTime()):L('যেকোনো সময়','Any time')} · ${r.done?L('সম্পন্ন','Done'):L('অপেক্ষমাণ','Waiting')}</small></div><button class="mini" data-rd="${i}">✕</button></div>`).join('')}
    <input id="rn" placeholder="${L('নাম (যেমন: মা)','Name (e.g. Mom)')}"><input id="rp" inputmode="numeric" placeholder="${L('মোবাইল নম্বর','Mobile number')}"><input id="ra" inputmode="numeric" placeholder="${L('টাকার পরিমাণ','Amount')}"><input id="rt" type="datetime-local"><button class="btn" id="rad">${L('অ্যাকাউন্ট সেভ করুন','Save account')}</button><button class="btn alt" id="no">${L('বন্ধ করুন','Close')}</button>`);
    $('#no').onclick=close;
    panel.querySelectorAll('[data-bd]').forEach(e=>e.onclick=async()=>{const p=cp();p.buckets.splice(+e.dataset.bd,1);await save(p)&&ui()});
    panel.querySelectorAll('[data-rd]').forEach(e=>e.onclick=async()=>{const p=cp();p.rules.splice(+e.dataset.rd,1);await save(p)&&ui()});
    $('#bad').onclick=async()=>{const n=$('#bn').value.trim(),a=parseInt($('#ba').value);
     if(!n||!a||a<=0){toast('সঠিক পরিমাণ দিন');return}if(a>freeBal()){toast('ব্যালেন্স পর্যাপ্ত নয়');return}
     const p=cp(),b=p.buckets.find(x=>x.n===n);b?b.amt+=a:p.buckets.push({n,amt:a});await save(p)&&ui()};
    $('#rad').onclick=async()=>{const ph=$('#rp').value.trim(),a=parseInt($('#ra').value),n=$('#rn').value.trim();
     if(!/^01\d{9}$/.test(ph)){toast('নম্বর দিন');return}if(!a||a<=0){toast('সঠিক পরিমাণ দিন');return}
     const p=cp(),nm=n||(p.saved.find(s=>s.phone===ph)||{}).name||'';
     p.rules.push({phone:ph,name:nm,amt:a,at:$('#rt').value||''});
     const s=p.saved.find(x=>x.phone===ph);s?s.name=nm||s.name:p.saved.push({phone:ph,name:nm});await save(p)&&ui()}}
   $('#planRow').onclick=ui}
  async function commit(t,a,m={}){
    if(frozen){toast('আপনার অ্যাকাউন্ট ফ্রিজ করা আছে');return false}
    if(!sync){balance+=a;tx.unshift({...m,t,d:'এইমাত্র',a,k:a>0?'in':'out'});paintBal();paintHis();return true}
    try{const id='t'+Date.now()+Math.random().toString(36).slice(2,6);
      const {plan:np,...mt}=m;await sync.wallets.doc(uid).update({balance:balance+a,...(np?{plan:np}:{})});
      await sync.txs.doc(id).set({id,uid,name:$('#uname').textContent,t,a,ts:Date.now(),...mt});return true}
    catch(e){toast('সমস্যা হয়েছে, আবার চেষ্টা করুন');return false}
  }
  
    /* ---------- Customer live chat (AI assistant answers safe questions, rest go to an agent) ---------- */
    let dots={chat:0,req:0};
    const paintDot=()=>{$('#chDot').style.display=dots.chat||dots.req?'block':'none'};
    function chatInit(){
      let chat=null,FQ=[];const box=$('#chMsgs');
      sync.faqs.onSnapshot(d=>{const x=d.data();FQ=(x&&x.list)||[]});
      sync.chats.doc(uid).onSnapshot(d=>{chat=d.data()||null;paint()});
      function paint(){
        const ms=(chat&&chat.msgs)||[];
        box.innerHTML=(ms.length?'':'<div class="m sy">'+tr('কিছু জানতে চান? এখানে লিখুন। সাধারণ প্রশ্নের উত্তর সাথে সাথে পাবেন, বাকিগুলো আমাদের টিম দেখবে।')+'</div>')
          +ms.map(m=>m.f==='sys'?`<div class="m sy">${esc(tr(m.t))}</div>`:`<div class="m ${m.f==='cu'?'me':'ot'}">${esc(m.t)}${m.f==='cu'?'':`<small>${tr(m.f==='ai'?'সহকারী':'এজেন্ট')}</small>`}</div>`).join('');
        box.scrollTop=box.scrollHeight;
        const open=$('#chat').classList.contains('on'),u=(chat&&chat.unreadCust)||0;
        dots.chat=u&&!open?1:0;paintDot();
        if(open&&u)sync.chats.doc(uid).update({unreadCust:0});
      }
      window.openChat=()=>{$('#chat').classList.add('on');paint();$('#chIn').focus()};
      $('#chBack').onclick=()=>$('#chat').classList.remove('on');
      const send=async()=>{
        const inp=$('#chIn'),text=inp.value.trim();if(!text)return;inp.value='';
        const a=analyze(text,FQ),now=Date.now(),old=chat||{msgs:[],audit:[]};
        const msgs=[...old.msgs,{f:'cu',t:a.shown,ts:now}];
        const audit=[...(old.audit||[]),'Received '+ts(),'Redacted and analyzed','Matched policy: '+a.policy,'Decision: '+a.dec.replace('_',' ')];
        if(a.dec==='auto_sent'){msgs.push({f:'ai',t:a.reply,ts:now+1});audit.push('Reply sent automatically')}
        else msgs.push({f:'sys',t:'আপনার বার্তা আমাদের টিমের কাছে পাঠানো হয়েছে। শীঘ্রই উত্তর পাবেন।',ts:now+1});
        await sync.chats.doc(uid).set({uid,name:$('#uname').textContent,status:a.dec,last:now+1,unreadAdmin:(old.unreadAdmin||0)+1,unreadCust:0,a,draft:a.reply,msgs,audit});
      };
      $('#chSend').onclick=send;$('#chIn').onkeydown=e=>{if(e.key==='Enter')send()};
    }
  
    /* ---------- Customer Service hub: live chat, email, complaint (photo / voice) ---------- */
    function csInit(){
      let view='menu',EM=[],CP=[],photo=null,voice=null,rec=null,recT=null,recSec=0;
      const body=$('#csBody'),TT={menu:'কাস্টমার সার্ভিস',email:'ইমেইল করুন',comp:'অভিযোগ জানান',mine:'আমার অনুরোধ'};
      const CATS=['ট্রানজেকশন সমস্যা','ভুল নম্বরে টাকা পাঠানো','প্রতারণা / স্ক্যাম','অ্যাকাউন্ট লক বা পিন সমস্যা','অ্যাপ বা সার্ভিস সমস্যা','অন্যান্য'];
      const SS={new:['নতুন','n'],open:['প্রক্রিয়াধীন','o'],resolved:['সমাধান হয়েছে','r']};
      const mine=()=>[...EM.map(x=>({...x,k:'e'})),...CP.map(x=>({...x,k:'c'}))].sort((a,b)=>b.ts-a.ts);
      const isOpen=()=>$('#cs').classList.contains('on');
      const newId=p=>p+Date.now()+Math.random().toString(36).slice(2,6);
      let busy=false;
      function markRead(){if(busy)return;busy=true;try{EM.filter(x=>x.unreadCust).forEach(x=>sync.emails.doc(x.id).update({unreadCust:0}));CP.filter(x=>x.unreadCust).forEach(x=>sync.complaints.doc(x.id).update({unreadCust:0}))}finally{busy=false}}
      function upd(){dots.req=[...EM,...CP].some(x=>x.unreadCust)&&!(isOpen()&&view==='mine')?1:0;paintDot();if(isOpen()&&view==='mine')markRead();if(isOpen()&&(view==='menu'||view==='mine'))paint()}
      sync.emails.where('uid','==',uid).onSnapshot(q=>{EM=q.docs.map(d=>({id:d.id,...d.data()}));upd()});
      sync.complaints.where('uid','==',uid).onSnapshot(q=>{CP=q.docs.map(d=>({id:d.id,...d.data()}));upd()});
      function go(v){if(rec)rec.stop();view=v;if(v==='mine')markRead();paint();upd()}
      window.openCS=()=>{view='menu';$('#cs').classList.add('on');paint();upd()};
      $('#csBack').onclick=()=>{if(view==='menu'){if(rec)rec.stop();$('#cs').classList.remove('on')}else go('menu')};
  
      function paint(){
        $('#csTitle').textContent=tr(TT[view]);const q=mine().length;
        if(view==='menu')body.innerHTML=`<div class="opt" data-go="chat"><span>💬</span><div><b>লাইভ চ্যাট</b><small>এখনই আমাদের সাথে কথা বলুন</small></div></div>
          <div class="opt" data-go="email"><span>✉️</span><div><b>ইমেইল করুন</b><small>চ্যাট না করে ইমেইলে জানান</small></div></div>
          <div class="opt" data-go="comp"><span>📝</span><div><b>অভিযোগ জানান</b><small>ছবি বা ভয়েসসহ সমস্যা জমা দিন</small></div></div>
          <div class="opt" data-go="mine"><span>📂</span><div><b>আমার অনুরোধ</b><small>${q?L(bn(q)+'টি জমা দেওয়া আছে',q+' submitted'):'ইমেইল ও অভিযোগের অবস্থা দেখুন'}</small></div>${dots.req?'<i class="rdot"></i>':''}</div>
          <p class="hint">জরুরি অবস্থায় (প্রতারণা, ভুল লেনদেন) অভিযোগ বা লাইভ চ্যাট ব্যবহার করুন। পিন বা ওটিপি কাউকে দেবেন না।</p>`;
        if(view==='email')body.innerHTML=`<label for="eEm">আপনার ইমেইল (উত্তর পেতে, ঐচ্ছিক)</label><input id="eEm" type="email" placeholder="name@example.com">
          <label for="eSu">বিষয়</label><input id="eSu" maxlength="120"><label for="eBd">বিস্তারিত</label><textarea id="eBd" rows="7"></textarea>
          <button class="btn" id="eGo">ইমেইল পাঠান</button><p class="hint">আপনার উত্তর এই অ্যাপের "আমার অনুরোধ"-এ দেখতে পাবেন।</p>`;
        if(view==='comp')body.innerHTML=`<label for="cCt">অভিযোগের ধরন</label><select id="cCt">${CATS.map(c=>`<option value="${c}">${c}</option>`).join('')}</select>
          <label for="cTx">ট্রানজেকশন আইডি (থাকলে)</label><input id="cTx" maxlength="20">
          <label for="cDs">সমস্যাটি বলুন</label><textarea id="cDs" rows="5" placeholder="কী হয়েছে, কখন হয়েছে…"></textarea>
          <div class="att"><button class="mini" id="cPh" type="button">📷 ছবি যোগ করুন</button> <button class="mini" id="cVo" type="button">🎤 ভয়েস রেকর্ড</button><input type="file" id="cPf" accept="image/*" hidden></div>
          <div id="cPv"></div><button class="btn" id="cGo">অভিযোগ জমা দিন</button><p class="hint">ছবি বা ভয়েস ঐচ্ছিক। ভয়েস সর্বোচ্চ ৪৫ সেকেন্ড।</p>`;
        if(view==='mine')body.innerHTML=q?mine().map(x=>`<div class="rq"><div><span class="tg ${SS[x.status][1]}">${SS[x.status][0]}</span> <span class="tg">${x.k==='e'?'ইমেইল':'অভিযোগ'}</span></div><b>${esc(x.k==='e'?x.subject:x.cat)}</b><small>${fd(x.ts)} · ${L('রেফারেন্স','Reference')} ${x.k==='e'?'E':'C'}-${esc(x.id.slice(-5).toUpperCase())}</small><p>${esc((x.body||'').slice(0,140))} ${x.photo?'📷':''} ${x.voice?'🎤':''}</p>${(x.replies||[]).map(r=>`<div class="rp"><small>${L('সাপোর্ট','Support')} · ${fd(r.ts)}</small>${esc(r.t)}</div>`).join('')}</div>`).join(''):'<p class="hint">এখনো কিছু জমা দেননি।</p>';
        if(view==='comp')pv();tx8(body);
      }
      function pv(){const el=$('#cPv');if(!el)return;
        el.innerHTML=(photo?`<div class="pvb"><img src="${photo}" alt="সংযুক্ত ছবি"><button class="mini" data-x="ph" type="button">মুছুন</button></div>`:'')
         +(rec?`<div class="pvb"><i class="recd"></i> ${L('রেকর্ড হচ্ছে… '+bn(recSec)+' সে.','Recording… '+recSec+' s')} <button class="mini" data-x="stop" type="button">থামুন</button></div>`:'')
         +(voice&&!rec?`<div class="pvb"><audio controls src="${voice}"></audio><button class="mini" data-x="vo" type="button">মুছুন</button></div>`:'');
        tx8(el);const b=$('#cVo');if(b)b.textContent=tr(rec?'⏹ থামুন':'🎤 ভয়েস রেকর্ড')}
      const shrink=(f,mx=900)=>new Promise((ok,no)=>{const r=new FileReader();r.onerror=no;r.onload=()=>{const im=new Image();im.onerror=no;im.onload=()=>{const k=Math.min(1,mx/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);ok(c.toDataURL('image/jpeg',.65))};im.src=r.result};r.readAsDataURL(f)});
      async function recToggle(){
        if(rec){rec.stop();return}
        if(!navigator.mediaDevices||!window.MediaRecorder){toast('এই ব্রাউজারে ভয়েস রেকর্ড চলবে না');return}
        try{const s=await navigator.mediaDevices.getUserMedia({audio:true}),ch=[];rec=new MediaRecorder(s);
          rec.ondataavailable=e=>{if(e.data.size)ch.push(e.data)};
          rec.onstop=()=>{clearInterval(recT);s.getTracks().forEach(t=>t.stop());const blob=new Blob(ch,{type:(rec&&rec.mimeType)||'audio/webm'});rec=null;
            const r=new FileReader();r.onload=()=>{if(r.result.length>900000){toast('রেকর্ডিং বড় হয়ে গেছে, ছোট করে আবার দিন');voice=null}else voice=r.result;pv()};r.readAsDataURL(blob);pv()};
          rec.start();recSec=0;recT=setInterval(()=>{recSec++;pv();if(recSec>=45&&rec)rec.stop()},1000);pv();
        }catch(e){rec=null;toast('মাইক্রোফোনের অনুমতি পাওয়া যায়নি')}}
      async function submitEmail(){
        const em=$('#eEm').value.trim(),su=$('#eSu').value.trim(),bd=$('#eBd').value.trim();
        if(!su||!bd){toast('বিষয় ও বিস্তারিত লিখুন');return}
        if(em&&!/^\S+@\S+\.\S+$/.test(em)){toast('ইমেইল ঠিকানা ঠিক নয়');return}
        const id=newId('e');
        try{await sync.emails.doc(id).set({id,uid,name:$('#uname').textContent,ts:Date.now(),status:'new',email:em,subject:analyze(su).shown,body:analyze(bd).shown,replies:[],unreadCust:0});toast('ইমেইল পাঠানো হয়েছে ✓');go('mine')}
        catch(e){toast('পাঠানো যায়নি, আবার চেষ্টা করুন')}}
      async function submitComp(){
        if(rec){toast('আগে রেকর্ডিং থামান');return}
        const d=$('#cDs').value.trim(),cat=$('#cCt').value;
        if(!d&&!photo&&!voice){toast('সমস্যা লিখুন, অথবা ছবি/ভয়েস দিন');return}
        const a=analyze(d||cat),scam=cat===CATS[2]||a.intent==='scam',known=a.intent!=='unknown';
        const id=newId('c');
        try{await sync.complaints.doc(id).set({id,uid,name:$('#uname').textContent,ts:Date.now(),status:'new',cat,txn:$('#cTx').value.trim(),body:a.shown,pri:scam?'urgent':known?a.pri:'normal',team:scam?'Fraud Team':known?a.team:'Support Agents',photo:photo||'',voice:voice||'',replies:[],unreadCust:0});
          photo=voice=null;toast(L('অভিযোগ জমা হয়েছে। রেফারেন্স C-','Complaint submitted. Reference C-')+id.slice(-5).toUpperCase());go('mine')}
        catch(e){toast('ফাইল বড় হওয়ায় জমা হয়নি। ছোট ছবি/ভয়েস দিন')}}
      body.addEventListener('click',async e=>{
        const g=e.target.closest('[data-go]');if(g){g.dataset.go==='chat'?window.openChat():go(g.dataset.go);return}
        const x=e.target.closest('[data-x]');if(x){const k=x.dataset.x;if(k==='ph')photo=null;if(k==='vo')voice=null;if(k==='stop'&&rec)rec.stop();pv();return}
        const b=e.target.closest('button');if(!b)return;
        if(b.id==='eGo')submitEmail();if(b.id==='cGo')submitComp();if(b.id==='cVo')recToggle();if(b.id==='cPh')$('#cPf').click()});
      body.addEventListener('change',async e=>{if(e.target.id!=='cPf'||!e.target.files[0])return;
        try{photo=await shrink(e.target.files[0]);pv()}catch(_){toast('ছবিটি পড়া যায়নি')}e.target.value=''});
    }
  

  /* ---------- Language ---------- */
  function langInit(){
    $('#langVal').textContent=LANG==='en'?'English':'বাংলা';
    $('#langRow').onclick=()=>{
      open(`<h3>ভাষা</h3>
        <div class="opt" data-l="bn"><span>🇧🇩</span><div><b translate="no">বাংলা</b><small translate="no">Bangla</small></div>${LANG==='bn'?'<i class="ck">✓</i>':''}</div>
        <div class="opt" data-l="en"><span>🇬🇧</span><div><b translate="no">English</b><small translate="no">English</small></div>${LANG==='en'?'<i class="ck">✓</i>':''}</div>
        <button class="btn alt" id="no">বাতিল</button>`);
      $('#no').onclick=close;
      panel.querySelectorAll('[data-l]').forEach(o=>o.onclick=()=>{if(o.dataset.l===LANG){close();return}try{localStorage.setItem('upay_lang',o.dataset.l)}catch(e){}location.reload()})}}

  /* ---------- Account type: personal / student (admin approval) / islamic ---------- */
  const ALAB={personal:'ব্যক্তিগত',student:'শিক্ষার্থী',islamic:'ইসলামিক'},AICO={personal:'👤',student:'🎓',islamic:'🕌'};
  function acctInit(){
    let R=null,SCF=STU_DEF,photo={card:'',selfie:''},which='card';
    const rq=()=>({...STU_DEF.req,...((SCF&&SCF.req)||{})});
    const guide=()=>(LANG==='en'?(SCF.guide_en||SCF.guide_bn):(SCF.guide_bn||SCF.guide_en))||'';
    const paintAcct=()=>{
      const pend=!!R&&R.status==='pending'&&curAcct!=='student';
      $('#acctVal').textContent=tr(ALAB[curAcct]||ALAB.personal)+(pend?' · '+tr('অপেক্ষমাণ'):'');
      const b=$('#abadge');b.style.display=curAcct==='personal'?'none':'inline-block';b.textContent=(AICO[curAcct]||'')+' '+tr(ALAB[curAcct]||'')};
    window.paintAcct=paintAcct;
    function types(){
      const st=R&&R.status,
        sub={personal:'সাধারণ ব্যবহারের জন্য',islamic:'ইসলামিক অ্যাকাউন্টে স্যুইচ করুন',
          student:curVerified?'যাচাই করা হয়েছে':st==='pending'?'অনুমোদনের অপেক্ষায়':st==='rejected'?'আবেদন প্রত্যাখ্যাত, আবার আবেদন করুন':'ইডু মেইল ও ভার্সিটি আইডি কার্ড লাগবে'};
      open(`<h3>অ্যাকাউন্টের ধরন</h3>${['personal','student','islamic'].map(k=>`<div class="opt" data-t="${k}"><span>${AICO[k]}</span><div><b>${ALAB[k]}</b><small>${sub[k]}</small></div>${curAcct===k?'<i class="ck">✓</i>':''}</div>`).join('')}<button class="btn alt" id="no">বন্ধ করুন</button>`);
      $('#no').onclick=close;
      panel.querySelectorAll('[data-t]').forEach(o=>o.onclick=()=>pick(o.dataset.t))}
    async function pick(k){
      if(!sync||!uid){toast('এখন সম্ভব নয়');return}
      if(k==='student'&&!curVerified){if(R&&R.status==='pending')return pending();return form()}
      if(k===curAcct){close();return}
      try{await sync.wallets.doc(uid).update({acct:k});close();toast(L(ALAB[k]+' অ্যাকাউন্টে পরিবর্তন হয়েছে ✓','Switched to '+tr(ALAB[k])+' account ✓'))}
      catch(e){toast('সমস্যা হয়েছে, আবার চেষ্টা করুন')}}
    function pending(){
      if(!R)return types();
      open(`<h3>শিক্ষার্থী অ্যাকাউন্ট</h3><div class="gbox"><span class="tg n">অনুমোদনের অপেক্ষায়</span><p style="margin:8px 0">আপনার আবেদন অ্যাডমিনের কাছে পাঠানো হয়েছে। অনুমোদন হলে অ্যাকাউন্ট চালু হবে।</p><small>${esc(R.email||'')} ${R.uni?'· '+esc(R.uni):''}</small></div><button class="btn alt" id="canc">আবেদন বাতিল করুন</button><button class="btn alt" id="no">বন্ধ করুন</button>`);
      $('#no').onclick=close;
      $('#canc').onclick=async()=>{try{await sync.acctreqs.doc(uid).delete();close();toast('আবেদন বাতিল হয়েছে')}catch(e){toast('সমস্যা হয়েছে, আবার চেষ্টা করুন')}}}
    function form(){
      const r=rq(),rejected=R&&R.status==='rejected',p=rejected?R:{};
      photo={card:p.card||'',selfie:p.selfie||''};
      const fld=(id,label,val,ph,type)=>`<label for="${id}">${label}</label><input id="${id}" type="${type||'text'}" value="${esc(val||'')}" placeholder="${ph||''}" autocomplete="off">`;
      const pic=(k,label)=>`<label>${label}</label><div id="sPv_${k}"></div><button class="mini" type="button" data-pk="${k}">📷 ছবি যোগ করুন</button>`;
      open(`<h3>শিক্ষার্থী অ্যাকাউন্ট</h3>
        ${guide()?`<div class="gbox">${esc(guide())}</div>`:''}
        ${rejected?`<div class="rej"><b>আগের আবেদন প্রত্যাখ্যান করা হয়েছে</b>${p.note?`<div><b>কারণ:</b> ${esc(p.note)}</div>`:''}</div>`:''}
        ${r.email?fld('sEm','শিক্ষা প্রতিষ্ঠানের ইমেইল (edu mail)',p.email,'name@university.edu.bd','email'):''}
        ${r.uni?fld('sUn','বিশ্ববিদ্যালয়ের নাম',p.uni,''):''}
        ${r.sid?fld('sId','স্টুডেন্ট আইডি নম্বর',p.sid,''):''}
        ${r.card?pic('card','ভার্সিটি আইডি কার্ডের ছবি'):''}
        ${r.selfie?pic('selfie','আইডি কার্ড হাতে সেলফি'):''}
        <input type="file" id="sFile" accept="image/*" hidden>
        <label class="chk"><input type="checkbox" id="sOk"> <span>আমি নিশ্চিত করছি যে সব তথ্য সঠিক</span></label>
        <button class="btn" id="sGo">আবেদন পাঠান</button><button class="btn alt" id="no">বাতিল</button>`);
      const pv=()=>['card','selfie'].forEach(k=>{const e=$('#sPv_'+k);if(e)e.innerHTML=photo[k]?`<img class="idimg" src="${photo[k]}" alt="ID">`:''});pv();
      panel.querySelectorAll('[data-pk]').forEach(b=>b.onclick=()=>{which=b.dataset.pk;$('#sFile').click()});
      $('#sFile').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{photo[which]=await shrinkImg(f,1000);pv()}catch(_){toast('ছবিটি পড়া যায়নি')}e.target.value=''};
      $('#no').onclick=close;
      $('#sGo').onclick=async()=>{
        const v=id=>{const e=$('#'+id);return e?e.value.trim():''},em=v('sEm'),un=v('sUn'),sid=v('sId');
        if(r.email){if(!/^\S+@\S+\.\S+$/.test(em)){toast('ইমেইল ঠিকানা ঠিক নয়');return}if(!eduOk(SCF.domains,em)){toast('শিক্ষা প্রতিষ্ঠানের (edu) ইমেইল দিন');return}}
        if(r.uni&&un.length<3){toast('বিশ্ববিদ্যালয়ের নাম লিখুন');return}
        if(r.sid&&!sid){toast('স্টুডেন্ট আইডি নম্বর দিন');return}
        if(r.card&&!photo.card){toast('আইডি কার্ডের ছবি দিন');return}
        if(r.selfie&&!photo.selfie){toast('আইডি কার্ড হাতে সেলফি দিন');return}
        if(!$('#sOk').checked){toast('তথ্য সঠিক বলে নিশ্চিত করুন');return}
        try{await sync.acctreqs.doc(uid).set({uid,name:$('#uname').textContent,type:'student',email:em,uni:un,sid,card:r.card?photo.card:'',selfie:r.selfie?photo.selfie:'',ts:Date.now(),status:'pending',note:'',unreadCust:0});
          toast('আবেদন পাঠানো হয়েছে ✓');pending()}
        catch(e){toast('ফাইল বড় হওয়ায় জমা হয়নি। ছোট ছবি দিন')}}}
    $('#acctRow').onclick=types;
    sync.acctreqs.doc(uid).onSnapshot(d=>{R=d.data()||null;
      if(R&&R.unreadCust){toast(R.status==='approved'?'🎓 আপনার শিক্ষার্থী অ্যাকাউন্ট অনুমোদিত হয়েছে':'আপনার শিক্ষার্থী অ্যাকাউন্টের আবেদন গৃহীত হয়নি');sync.acctreqs.doc(uid).update({unreadCust:0})}
      paintAcct()});
    sync.stu.onSnapshot(d=>{SCF={...STU_DEF,...(d.data()||{})}});
    paintAcct();
  }
  
  (async()=>{try{
    if(!window.claude)return;
    const [db,user]=await Promise.all([claude.use('db'),claude.use('user')]);
    if(!db||!user)return;
    uid=await user.id();const me=await user.me();isAdm=await user.canEdit();
    sync={wallets:db.collection('wallets'),txs:db.collection('txs'),cfg:db.doc('config/app'),chats:db.collection('chats'),faqs:db.doc('config/faqs'),emails:db.collection('emails'),complaints:db.collection('complaints'),acctreqs:db.collection('acctreqs'),stu:db.doc('config/student')};
    const ref=sync.wallets.doc(uid);
    if(!(await ref.get()).exists)await ref.set({name:me.name||L('গ্রাহক','Customer'),balance:12500,frozen:false,acct:'personal',createdAt:Date.now()});
    ref.onSnapshot(d=>{const w=d.data();if(!w)return;balance=w.balance||0;frozen=!!w.frozen;
      $('#uname').textContent=w.name;$('.av').textContent=(w.name||'গ')[0];$('#uname2').textContent=w.name;$('#pav').textContent=(w.name||'গ')[0];curAcct=w.acct||'personal';curVerified=!!w.studentOK;plan={buckets:[],rules:[],saved:[],...(w.plan||{})};$('#planRow').style.display=isStu()?'':'none';window.paintAcct&&window.paintAcct();paintBal();paintHis();
      if(frozen)toast('আপনার অ্যাকাউন্ট ফ্রিজ করা হয়েছে')});
    sync.txs.where('uid','==',uid).onSnapshot(q=>{tx=q.docs.map(d=>d.data()).sort((a,b)=>b.ts-a.ts).map(x=>({...x,d:fdf(x.ts),k:x.a>0?'in':'out'}));paintHis()});
    sync.cfg.onSnapshot(d=>{const c=d.data();const n=$('#note');
      if(c&&c.text){n.style.display='block';n.textContent='📢 '+c.text;if(c.ts>lastNote&&lastNote)toast('নতুন ঘোষণা');lastNote=c.ts}else n.style.display='none'});
    chatInit();csInit();acctInit();planInit();setInterval(()=>fireRules(false),30000);
  }catch(e){console.error(e)}})();
  
  paintBal();paintHis();
  langInit();tx8($('#app'));document.documentElement.lang=LANG;
  
}

/* ---------- Admin console ---------- */
function initAdmin(){
  const root=$('#root');
  const ST={auto_sent:['Auto-replied','ok'],needs_review:['Needs review','warn'],escalated:['Escalated','bad'],agent_sent:['Sent by agent','info']};
  const TABS=[['chat','Live chat'],['mail','Emails'],['comp','Complaints'],['cus','Customers'],['txn','Transactions'],['faq','My FAQ'],['pol','Reply policies'],['stu','Student accounts'],['ann','Announcement']];
  let tab='chat',sel=null,W=[],T=[],C=[],M=[],X=[],selM=null,selX=null,faqs=[],note='',modal=null,msg='',amsg='',cols,cfg,fqd,stuDoc,AR=[],selA=null,stu=null;const ui={};
  const uv=(k,d)=>ui[k]===undefined?d:ui[k];
  const stuCfg=()=>({...STU_DEF,...(stu||{}),req:{...STU_DEF.req,...((stu&&stu.req)||{})}});
  const pn=()=>AR.filter(x=>x.status==='pending').length;
  const nw=a=>a.filter(x=>x.status==='new').length;
  const chatOf=id=>C.find(c=>c.id===id),st=s=>ST[s]||['Open','info'];

  function vChat(){
    const L=C.slice().sort((a,b)=>b.last-a.last);if(!sel&&L[0])sel=L[0].id;
    const c=chatOf(sel),a=c&&c.a;
    const list=`<div class="card"><h3>Conversations</h3><p class="lead">Safe questions get an instant AI reply. The rest wait here for an agent.</p>${L.length?`<ul class="list">${L.map(x=>`<li tabindex="0" data-a="sel" data-id="${esc(x.id)}" aria-selected="${x.id===sel}"><span class="tag ${st(x.status)[1]}">${st(x.status)[0]}</span>${x.unreadAdmin?`<span class="tag bad">${x.unreadAdmin} new</span>`:''}<b>${esc(x.name)}</b><small>${esc(en((x.msgs[x.msgs.length-1]||{}).t||'').slice(0,60))}</small></li>`).join('')}</ul>`:'<p class="lead">No conversations yet. Open the customer app and send a message.</p>'}</div>`;
    const thr=c?`<div class="card"><h3>${esc(c.name)} <small style="color:var(--mute);font-weight:400">${fd(c.last)}</small></h3>
      <div class="thr" style="max-height:340px;overflow:auto">${c.msgs.map(m=>m.f==='sys'?`<div class="note">${esc(en(m.t))}</div>`:`<div class="bub ${m.f==='cu'?'cu':'ai'}">${esc(m.t)}${m.f==='cu'?'':`<small style="display:block;opacity:.7">${m.f==='ai'?'AI assistant':'Agent'}</small>`}</div>`).join('')}</div>
      <label for="rp">${c.status==='escalated'?'Holding reply (fraud team takes over)':'Reply to customer'}</label>
      <textarea id="rp" data-k="reply" rows="4">${esc(ui.reply||'')}</textarea>
      <button class="btn" data-a="send">Send reply</button>
      ${c.draft&&c.status!=='auto_sent'&&c.status!=='agent_sent'?'<button class="btn alt" data-a="draft">Use AI draft</button>':''}
      ${c.status==='needs_review'&&a?`<button class="btn alt" data-a="esc">Escalate to ${esc(a.team)}</button>`:''}</div>`
      :'<div class="card"><p class="lead">Select a conversation.</p></div>';
    const an=c&&a?`<div class="card"><h3>AI analysis</h3><p><span class="tag ${a.pri==='urgent'?'bad':a.pri==='high'?'warn':'info'}">${esc(a.pri)} priority</span><span class="tag ${st(c.status)[1]}">${st(c.status)[0]}</span></p>
      <ul class="why"><li><span>Topic</span><b>${esc(a.policy)}</b></li><li><span>Language</span><b>${esc(a.lang)}</b></li><li><span>Route to</span><b>${esc(a.team)}</b></li><li><span>Matched words</span><b>${esc((a.hits||[]).join(', ')||'none')}</b></li>${Object.entries(a.ent||{}).map(([k,v])=>`<li><span>Found ${esc(k)}</span><b>${esc(v)}</b></li>`).join('')}</ul>
      <p style="margin:10px 0 0;font-size:14px">Confidence ${Math.round(a.conf*100)}%</p><div class="bar"><i style="width:${a.conf*100}%"></i></div>
      ${(a.flags||[]).map(f=>`<p><span class="tag bad">Flag</span>${esc(f)}</p>`).join('')}
      <p class="lead" style="margin:8px 0 4px">Why this decision</p><p style="font-size:14px;margin:0">${a.dec==='auto_sent'?'Policy allows automation, confidence is high, and no safety flags.':a.dec==='escalated'?'Fraud reports always go to a specialist team.':'Policy needs a person, or confidence is low, or a safety flag was raised.'}</p>
      <p class="lead" style="margin:12px 0 4px">Audit trail</p><ul class="why">${(c.audit||[]).map(x=>`<li><span>${esc(x)}</span></li>`).join('')}</ul></div>`:'<div class="card"></div>';
    return `<div class="cols">${list}${thr}${an}</div>`;
  }
  function vReq(k){
    const isC=k==='comp',L=(isC?X:M).slice().sort((a,b)=>b.ts-a.ts),cur=isC?selX:selM,r=L.find(x=>x.id===cur)||L[0];
    const SS={new:['New','warn'],open:['In progress','info'],resolved:['Resolved','ok']};
    const list=`<div class="card"><h3>${isC?'Complaints':'Emails'}</h3><p class="lead">${isC?'Submitted from the app, with an optional photo or voice note.':'Customers who prefer email over live chat.'}</p>${L.length?`<ul class="list">${L.map(x=>`<li tabindex="0" data-a="rsel" data-v="${k}" data-id="${esc(x.id)}" aria-selected="${!!r&&x.id===r.id}"><span class="tag ${SS[x.status][1]}">${SS[x.status][0]}</span>${isC?`<span class="tag ${x.pri==='urgent'?'bad':x.pri==='high'?'warn':'info'}">${esc(x.pri)}</span>`:''}${x.photo?'📷 ':''}${x.voice?'🎤 ':''}<b>${esc(isC?en(x.cat):x.subject)}</b><small>${esc(x.name)} · ${fd(x.ts)}</small></li>`).join('')}</ul>`:'<p class="lead">Nothing here yet. Submit one from the customer app.</p>'}</div>`;
    if(!r)return `<div class="cols2">${list}<div class="card"><p class="lead">Select an item.</p></div></div>`;
    const at=`data-v="${k}" data-id="${esc(r.id)}"`;
    return `<div class="cols2">${list}<div class="card"><h3>${esc(isC?en(r.cat):r.subject)} <span class="tag ${SS[r.status][1]}">${SS[r.status][0]}</span></h3>
      <p class="lead">${esc(r.name)} · ${fd(r.ts)} · Ref ${isC?'C':'E'}-${esc(r.id.slice(-5).toUpperCase())}${r.email?' · '+esc(r.email):''}${r.txn?' · Txn '+esc(r.txn):''}</p>
      ${isC?`<p><span class="tag info">Route: ${esc(r.team)}</span></p>`:''}
      <div class="bub cu">${esc(r.body||'(no text)')}</div>
      ${r.photo?`<div class="att"><img src="${r.photo}" alt="Attached photo"></div>`:''}${r.voice?`<div class="att"><audio controls src="${r.voice}"></audio></div>`:''}
      ${(r.replies||[]).map(p=>`<div class="bub ai">${esc(p.t)}<small style="display:block;opacity:.7">Agent · ${fd(p.ts)}</small></div>`).join('')}
      <label for="rr">Reply</label><textarea id="rr" data-k="rreply" rows="4">${esc(ui.rreply||'')}</textarea>
      <button class="btn" data-a="rsend" ${at}>Send reply</button><button class="btn alt" data-a="rst" data-s="open" ${at}>Mark in progress</button><button class="btn alt" data-a="rst" data-s="resolved" ${at}>Mark resolved</button>
      ${r.email?`<a class="btn alt" style="display:inline-block;text-decoration:none" href="mailto:${esc(r.email)}?subject=${encodeURIComponent('Re: '+(r.subject||en(r.cat)))}">Open in email app</a>`:''}</div></div>`}
  const vCus=()=>`<div class="card"><h3>Customers</h3><p class="lead">Everyone who opens the customer app appears here live. Freeze, adjust a balance, or delete.</p>${W.length?W.map(w=>`<div class="ar"><div class="g"><b>${esc(w.name)}</b> <span class="tag ${w.frozen?'bad':'ok'}">${w.frozen?'Frozen':'Active'}</span> <span class="tag info">${({student:'Student',islamic:'Islamic'})[w.acct]||'Personal'}</span><small>${esc(w.id.slice(0,12))} · ${money(w.balance||0)}</small></div><button class="btn alt" data-a="frz" data-id="${esc(w.id)}">${w.frozen?'Unfreeze':'Freeze'}</button><button class="btn alt" data-a="adj" data-id="${esc(w.id)}">Balance</button><button class="btn alt" data-a="del" data-id="${esc(w.id)}">Delete</button></div>`).join(''):'<p class="lead">No customers yet.</p>'}</div>`;
  const vTxn=()=>{const L=T.slice().sort((a,b)=>b.ts-a.ts);return `<div class="card"><h3>Transactions</h3>${L.length?L.map(x=>`<div class="ar"><div class="g"><b>${esc(en(x.t))}</b><small>${esc(x.name)} · ${fd(x.ts)}</small></div><b class="${x.a>0?'pos':'neg'}">${x.a>0?'+':'−'}${money(Math.abs(x.a))}</b><button class="btn alt" data-a="rev" data-id="${esc(x.id)}">Reverse and delete</button></div>`).join(''):'<p class="lead">No transactions yet.</p>'}</div>`};
  const vFaq=()=>`<div class="g2"><div class="card"><h3>Add a common question</h3><p class="lead">When a customer asks it in chat, the assistant sends your answer.</p>
    <label for="fq">Question</label><input id="fq" data-k="fq" value="${esc(ui.fq||'')}">
    <label for="fv">Other ways customers ask it (one per line)</label><textarea id="fv" data-k="fv" rows="3">${esc(ui.fv||'')}</textarea>
    <label for="fa">Your answer</label><textarea id="fa" data-k="fa" rows="4">${esc(ui.fa||'')}</textarea>
    <label class="chk"><input type="checkbox" data-k="fauto" ${ui.fauto===false?'':'checked'}> Send automatically</label>
    <button class="btn" data-a="fadd">Save question</button><p class="lead" role="status" style="margin-top:8px">${esc(msg)}</p></div>
    <div class="card"><h3>Saved questions</h3>${faqs.length?faqs.map((f,i)=>`<div style="border:1px solid var(--line);border-radius:10px;padding:10px;margin-bottom:8px"><span class="tag ${f.auto?'ok':'warn'}">${f.auto?'Auto-reply':'Agent review'}</span><b>${esc(f.q)}</b><div style="color:var(--mute);font-size:13.5px;margin-top:4px">${esc(f.a.slice(0,110))}</div><button class="btn alt" style="margin-left:0" data-a="fdel" data-id="${i}">Delete</button></div>`).join(''):'<p class="lead">No saved questions yet.</p>'}</div></div>`;
  const vPol=()=>`<div class="card"><h3>Reply policies</h3><p class="lead">Each topic has an approved reply and a rule for who sends it. Replace the sample texts with upay-approved wording in the KB object of app.js.</p><table><thead><tr><th>Topic</th><th>Who replies</th><th>Route</th><th>Sample reply (English)</th></tr></thead><tbody>${Object.values(KB).map(k=>`<tr><td><b>${esc(k.label)}</b></td><td>${k.esc?'Specialist team':k.auto?'Assistant':'Agent approves'}</td><td>${esc(k.team)}</td><td>${esc(k.en({}))}</td></tr>`).join('')}</tbody></table><div class="note">Safety rules apply to every message: never ask for a PIN or OTP, mask phone numbers and secret codes, send fraud reports to the fraud team, and never promise a refund the system cannot guarantee.</div></div>`;
  const vAnn=()=>`<div class="card"><h3>Announcement</h3><p class="lead">Shown as a banner on every customer's home page.${note?' Current: <b>'+esc(note)+'</b>':''}</p><input data-k="ann" value="${esc(ui.ann||'')}" placeholder="e.g. Service paused tonight at 12:00"><button class="btn" data-a="sn">Publish</button><button class="btn alt" data-a="cn">Clear</button><p class="lead" role="status" style="margin-top:8px">${esc(msg)}</p></div>`;

  function vStu(){
    const SS={pending:['Pending','warn'],approved:['Approved','ok'],rejected:['Rejected','bad']},S=s=>SS[s]||['Unknown','info'],
      Ls=AR.slice().sort((a,b)=>b.ts-a.ts),r=Ls.find(x=>x.id===selA)||Ls[0],C0=stuCfg(),R0=C0.req;
    const list=`<div class="card"><h3>Student account requests</h3><p class="lead">Customers who asked for a student account. Check the documents, then approve or reject.</p>${Ls.length?`<ul class="list">${Ls.map(x=>`<li tabindex="0" data-a="asel" data-id="${esc(x.id)}" aria-selected="${!!r&&x.id===r.id}"><span class="tag ${S(x.status)[1]}">${S(x.status)[0]}</span><b>${esc(x.name)}</b><small>${esc(x.uni||'')} · ${fd(x.ts)}</small></li>`).join('')}</ul>`:'<p class="lead">No requests yet. A customer can apply from More › Account Type › Student.</p>'}</div>`;
    const chk=(on,ok,label,val)=>on?`<li><span>${label}</span><b>${ok?'✓ ':'✗ '}${esc(val||'missing')}</b></li>`:'';
    const det=r?`<div class="card"><h3>${esc(r.name)} <span class="tag ${S(r.status)[1]}">${S(r.status)[0]}</span></h3>
      <p class="lead">Ref S-${esc(r.id.slice(-5).toUpperCase())} · ${fd(r.ts)}</p>
      <ul class="why">${chk(R0.email,!!r.email&&eduOk(C0.domains,r.email),'University email',r.email)}${chk(R0.uni,!!r.uni,'University',r.uni)}${chk(R0.sid,!!r.sid,'Student ID',r.sid)}${chk(R0.card,!!r.card,'ID card photo',r.card?'attached':'')}${chk(R0.selfie,!!r.selfie,'Selfie with ID',r.selfie?'attached':'')}</ul>
      ${r.card?`<p class="lead" style="margin:12px 0 0">ID card</p><div class="att"><img src="${r.card}" alt="ID card photo"></div>`:''}
      ${r.selfie?`<p class="lead" style="margin:12px 0 0">Selfie with ID card</p><div class="att"><img src="${r.selfie}" alt="Selfie with ID card"></div>`:''}
      ${r.note?`<div class="note">Last note to customer: ${esc(r.note)}</div>`:''}
      <label for="ar">Note to customer${r.status==='approved'?' (required to revoke)':r.status==='pending'?' (required to reject)':''}</label>
      <textarea id="ar" data-k="areason" rows="3">${esc(ui.areason||'')}</textarea>
      ${r.status!=='approved'?`<button class="btn" data-a="aok" data-id="${esc(r.id)}">Approve student account</button>`:''}
      ${r.status!=='rejected'?`<button class="btn alt" data-a="ano" data-id="${esc(r.id)}">${r.status==='approved'?'Revoke approval':'Reject'}</button>`:''}
      <p class="lead" role="status" style="margin-top:8px">${esc(amsg)}</p></div>`
      :'<div class="card"><p class="lead">Select a request.</p></div>';
    const rules=`<div class="card" style="margin-top:14px"><h3>Application rules</h3><p class="lead">Customers see these guidelines on the student account form and must provide every item you tick before they can apply.</p>
      <label for="gen">Guidelines (English)</label><textarea id="gen" data-k="g_en" rows="5">${esc(uv('g_en',C0.guide_en))}</textarea>
      <label for="gbn">Guidelines (Bangla)</label><textarea id="gbn" data-k="g_bn" rows="5">${esc(uv('g_bn',C0.guide_bn))}</textarea>
      <label for="gdm">Accepted email domains (comma separated, empty = any email)</label><input id="gdm" data-k="g_dom" value="${esc(uv('g_dom',C0.domains))}">
      <p class="lead" style="margin:12px 0 4px">Required from the customer</p>
      ${[['email','University (edu) email'],['uni','University name'],['sid','Student ID number'],['card','ID card photo'],['selfie','Selfie holding the ID card']].map(([k,l])=>`<label class="chk"><input type="checkbox" data-k="rq_${k}" ${uv('rq_'+k,R0[k])?'checked':''}> ${l}</label>`).join('')}
      <button class="btn" data-a="sg">Save rules</button><p class="lead" role="status" style="margin-top:8px">${esc(msg)}</p></div>`;
    return `<div class="cols2">${list}${det}</div>${rules}`;
  }
  function vModal(){const w=W.find(x=>x.id===modal.id);if(!w)return'';const d=modal.type==='del';
    return `<div class="sheet on"><div class="panel"><h3>${esc(w.name)} — ${d?'delete?':'balance'}</h3>${d?'<p style="margin-bottom:12px">This removes the customer, their chat and all their transactions.</p>':`<input data-k="adjv" inputmode="numeric" placeholder="+500 or -200" value="${esc(ui.adjv||'')}">`}<button class="btn" data-a="mok">${d?'Yes, delete':'Update balance'}</button><button class="btn alt" data-a="mno">Cancel</button></div></div>`}

  function render(){
    const ae=document.activeElement,aid=ae&&ae.dataset&&ae.dataset.k,n=s=>C.filter(c=>c.status===s).length,tot=W.reduce((x,w)=>x+(w.balance||0),0);
    let h=`<header><div class="logo">u</div><div><h1 style="font-size:24px;margin:0">upay Admin Console</h1><p>Live chat, AI-assisted replies, customers and transactions in one place.</p></div><span class="tag info" style="margin-left:auto">Demo · local data</span></header>
    <div class="kpis">${[['Chats',C.length],['Auto-replied',n('auto_sent')],['Needs review',n('needs_review')],['Escalated',n('escalated')],['New emails',nw(M)],['New complaints',nw(X)],['Student requests',pn()],['Customers',W.length],['Total balance',money(tot)]].map(([l,v])=>`<div class="kpi"><b>${v}</b><span>${l}</span></div>`).join('')}</div>
    <nav>${TABS.map(([i,l])=>`<button data-a="tab" data-v="${i}" aria-selected="${tab===i}">${l}${i==='mail'&&nw(M)?' ('+nw(M)+')':i==='comp'&&nw(X)?' ('+nw(X)+')':i==='stu'&&pn()?' ('+pn()+')':''}</button>`).join('')}</nav>`;
    h+=({chat:vChat,mail:()=>vReq('mail'),comp:()=>vReq('comp'),cus:vCus,txn:vTxn,faq:vFaq,pol:vPol,stu:vStu,ann:vAnn})[tab]();if(modal)h+=vModal();
    root.innerHTML=h;
    if(aid){const e=root.querySelector(`[data-k="${aid}"]`);if(e){e.focus();try{e.setSelectionRange(e.value.length,e.value.length)}catch(_){}}}
    const t=root.querySelector('.thr');if(t)t.scrollTop=t.scrollHeight;
  }
  root.addEventListener('input',e=>{const k=e.target.dataset&&e.target.dataset.k;if(k)ui[k]=e.target.type==='checkbox'?e.target.checked:e.target.value});
  root.addEventListener('click',async e=>{
    const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,id=b.dataset.id;
    try{
      if(a==='tab'){tab=b.dataset.v;msg='';amsg='';render()}
      else if(a==='sel'){sel=id;ui.reply='';const c=chatOf(id);if(c&&c.unreadAdmin)await cols.chats.doc(id).update({unreadAdmin:0});render()}
      else if(a==='draft'){ui.reply=chatOf(sel).draft;render()}
      else if(a==='send'){const c=chatOf(sel),t=(ui.reply||'').trim();if(!c||!t)return;ui.reply='';
        await cols.chats.doc(sel).update({msgs:[...c.msgs,{f:'ag',t,ts:Date.now()}],status:'agent_sent',last:Date.now(),unreadCust:(c.unreadCust||0)+1,audit:[...(c.audit||[]),'Agent approved reply '+ts()]})}
      else if(a==='esc'){const c=chatOf(sel);await cols.chats.doc(sel).update({status:'escalated',audit:[...(c.audit||[]),'Escalated to '+c.a.team+' '+ts()]})}
      else if(a==='rsel'){if(b.dataset.v==='comp')selX=id;else selM=id;ui.rreply='';render()}
      else if(a==='rsend'){const t=(ui.rreply||'').trim();if(!t)return;const c=b.dataset.v==='comp',r=(c?X:M).find(x=>x.id===id);if(!r)return;ui.rreply='';
        await (c?cols.complaints:cols.emails).doc(id).update({replies:[...(r.replies||[]),{t,ts:Date.now()}],status:r.status==='resolved'?'resolved':'open',unreadCust:(r.unreadCust||0)+1})}
      else if(a==='rst'){await (b.dataset.v==='comp'?cols.complaints:cols.emails).doc(id).update({status:b.dataset.s})}
      else if(a==='frz'){const w=W.find(x=>x.id===id);await cols.wallets.doc(id).update({frozen:!w.frozen})}
      else if(a==='adj'||a==='del'){modal={type:a,id};ui.adjv='';render()}
      else if(a==='mno'){modal=null;render()}
      else if(a==='mok'){const w=W.find(x=>x.id===modal.id);
        if(modal.type==='adj'){const v=parseInt(ui.adjv);if(!v)return;const t='t'+Date.now();
          await cols.wallets.doc(w.id).update({balance:(w.balance||0)+v});await cols.txs.doc(t).set({id:t,uid:w.id,name:w.name,t:'Admin adjustment',a:v,ts:Date.now()})}
        else{for(const x of T.filter(x=>x.uid===w.id))await cols.txs.doc(x.id).delete();for(const x of M.filter(x=>x.uid===w.id))await cols.emails.doc(x.id).delete();for(const x of X.filter(x=>x.uid===w.id))await cols.complaints.doc(x.id).delete();await cols.chats.doc(w.id).delete();await cols.acctreqs.doc(w.id).delete();await cols.wallets.doc(w.id).delete()}
        modal=null;render()}
      else if(a==='rev'){const x=T.find(t=>t.id===id),w=x&&W.find(q=>q.id===x.uid);if(w)await cols.wallets.doc(w.id).update({balance:(w.balance||0)-x.a});await cols.txs.doc(id).delete()}
      else if(a==='fadd'){const q=(ui.fq||'').trim(),an=(ui.fa||'').trim();if(!q||!an){msg='Write both the question and the answer.';render();return}
        await fqd.set({list:[...faqs,{q,alt:(ui.fv||'').split('\n').map(x=>x.trim()).filter(Boolean),a:an,auto:ui.fauto!==false}]});ui.fq=ui.fv=ui.fa='';msg='Saved. Customers who ask this now get your answer.';render()}
      else if(a==='fdel'){await fqd.set({list:faqs.filter((_,i)=>i!==+id)})}
      else if(a==='asel'){selA=id;ui.areason='';amsg='';render()}
      else if(a==='aok'){const w=W.find(x=>x.id===id);
        await cols.acctreqs.doc(id).update({status:'approved',note:(ui.areason||'').trim(),decidedAt:Date.now(),unreadCust:1});
        if(w)await cols.wallets.doc(id).update({acct:'student',studentOK:true});
        ui.areason='';amsg='Approved. The customer now has a student account.';render()}
      else if(a==='ano'){const reason=(ui.areason||'').trim(),w=W.find(x=>x.id===id);
        if(!reason){amsg='Write a short note so the customer knows why.';render();return}
        await cols.acctreqs.doc(id).update({status:'rejected',note:reason,decidedAt:Date.now(),unreadCust:1});
        if(w&&(w.studentOK||w.acct==='student'))await cols.wallets.doc(id).update({acct:w.acct==='student'?'personal':w.acct,studentOK:false});
        ui.areason='';amsg='Done. The customer can see your note and apply again.';render()}
      else if(a==='sg'){const C0=stuCfg();
        await stuDoc.set({guide_en:String(uv('g_en',C0.guide_en)).trim(),guide_bn:String(uv('g_bn',C0.guide_bn)).trim(),domains:String(uv('g_dom',C0.domains)).trim(),req:Object.fromEntries(['email','uni','sid','card','selfie'].map(k=>[k,!!uv('rq_'+k,C0.req[k])]))});
        ['g_en','g_bn','g_dom','rq_email','rq_uni','rq_sid','rq_card','rq_selfie'].forEach(k=>delete ui[k]);msg='Saved. New applications follow these rules.';render()}
      else if(a==='sn'){const v=(ui.ann||'').trim();if(v){await cfg.set({text:v,ts:Date.now()});msg='Published.';render()}}
      else if(a==='cn'){await cfg.set({text:'',ts:Date.now()});ui.ann='';msg='Cleared.';render()}
    }catch(err){console.error(err);msg='Something went wrong. Try again.';render()}
  });
  (async()=>{
    const db=window.claude&&await claude.use('db');if(!db){root.textContent='Storage is not available in this browser.';return}
    cols={wallets:db.collection('wallets'),txs:db.collection('txs'),chats:db.collection('chats'),emails:db.collection('emails'),complaints:db.collection('complaints'),acctreqs:db.collection('acctreqs')};cfg=db.doc('config/app');fqd=db.doc('config/faqs');stuDoc=db.doc('config/student');
    cols.wallets.onSnapshot(q=>{W=q.docs.map(d=>({id:d.id,...d.data()}));render()});
    cols.txs.onSnapshot(q=>{T=q.docs.map(d=>d.data());render()});
    cols.chats.onSnapshot(q=>{C=q.docs.map(d=>({id:d.id,...d.data()}));render()});
    cols.emails.onSnapshot(q=>{M=q.docs.map(d=>({id:d.id,...d.data()}));render()});
    cols.complaints.onSnapshot(q=>{X=q.docs.map(d=>({id:d.id,...d.data()}));render()});
    cols.acctreqs.onSnapshot(q=>{AR=q.docs.map(d=>({id:d.id,...d.data()}));render()});
    stuDoc.onSnapshot(d=>{stu=d.data()||null;render()});
    cfg.onSnapshot(d=>{note=(d.data()||{}).text||'';render()});
    fqd.onSnapshot(d=>{faqs=((d.data()||{}).list)||[];render()});
    render();
  })();
}

/* ---------- Boot ---------- */
(document.body.classList.contains("admin")?initAdmin:initCustomer)();
