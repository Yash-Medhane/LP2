const events = [
  {
    title: "CodeSprint Hackathon",
    meta: "24-hour, hybrid • Team size: up to 4 • Open track",
    desc: "Build a working prototype on a practical brief. Prizes for top 3 teams, mentorship, and live judging.",
    tags: ["Coding", "AI/ML", "Prizes"],
    date: "Dec 10, 2025",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "Designers’ Arena",
    meta: "UI/UX challenge • Remote submissions • Portfolio feature",
    desc: "Design a modern landing page for a startup brief. Mentors provide feedback and top entries get showcased.",
    tags: ["Design", "Portfolio"],
    date: "Jan 5, 2026",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "Tech Talks 2025",
    meta: "Keynotes & panels • Networking lounges",
    desc: "Industry experts share career tips, technical deep dives, and startup stories. Great for networking.",
    tags: ["Talks", "Careers"],
    date: "Dec 21, 2025",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "AI Innovators Summit",
    meta: "Conference • Hybrid • Startups and researchers",
    desc: "A showcase of the latest in AI innovation, ethics discussions, and future trends.",
    tags: ["AI/ML", "Talks"],
    date: "Feb 14, 2026",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "Startup Bootcamp",
    meta: "3-day workshop • Onsite • Team pitch",
    desc: "From idea to investor pitch — learn the startup process with guidance from founders and VCs.",
    tags: ["Entrepreneurship", "Workshop", "Pitching"],
    date: "Mar 2, 2026",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Cyber Security Summit",
    meta: "2-day event • Live demos • Capture the Flag",
    desc: "Explore ethical hacking, cybersecurity tools, and participate in hands-on challenges.",
    tags: ["Security", "Coding", "Workshop"],
    date: "Jan 28, 2026",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d3?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "Data Science Marathon",
    meta: "48-hour online challenge • Individual participation",
    desc: "Solve data-driven problems using Python and visualization tools. Compete for exciting prizes.",
    tags: ["AI/ML", "Coding", "Data"],
    date: "Apr 10, 2026",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "Web Wizards Challenge",
    meta: "Frontend competition • Remote • Solo or duo",
    desc: "Build an interactive web app in 36 hours. Judged on creativity, responsiveness, and design.",
    tags: ["Web", "Coding", "Design"],
    date: "May 12, 2026",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "Robotics Expo",
    meta: "Exhibition • Live demos • School & college teams",
    desc: "Showcase and compete with innovative robotics projects and autonomous systems.",
    tags: ["Robotics", "Engineering", "Showcase"],
    date: "Jun 7, 2026",
    img: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6799?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "GreenTech Conference",
    meta: "Hybrid event • Sustainability focus • Global speakers",
    desc: "Discuss sustainable innovations, renewable energy, and the future of green technology.",
    tags: ["Environment", "Tech", "Talks"],
    date: "Jul 15, 2026",
    img: "https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=1200&q=60",
  },
];


const eventsContainer = document.getElementById("eventsContainer");

function renderEvents(filteredEvents) {
  eventsContainer.innerHTML = "";

  if (filteredEvents.length === 0) {
    eventsContainer.innerHTML = "<p>No events found.</p>";
    return;
  }

  filteredEvents.forEach(event => {
    const article = document.createElement("article");
    article.classList.add("event-full");
    article.innerHTML = `
      <img src="${event.img}" alt="${event.title}">
      <div class="event-full-body">
        <h3>${event.title}</h3>
        <p class="meta">${event.meta}</p>
        <p>${event.desc}</p>
        <div class="event-actions">
          <span class="date">${event.date}</span>
        </div>
      </div>
    `;
    eventsContainer.appendChild(article);
  });
}

renderEvents(events);

const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");

function filterEvents() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = filterSelect.value;

  const filtered = events.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm) ||
      event.desc.toLowerCase().includes(searchTerm);
    const matchesCategory =
      selectedCategory === "all" ||
      event.tags.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  renderEvents(filtered);
}

searchInput.addEventListener("input", filterEvents);
filterSelect.addEventListener("change", filterEvents);
