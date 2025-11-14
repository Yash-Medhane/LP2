  const events = [
      { id: 1, name: "Tech Conference 2024" },
      { id: 2, name: "Hackathon Finals" },
      { id: 3, name: "AI Workshop" }
    ];

    const participants = {
      1: [
        { id: 1, name: "John Smith", email: "john@email.com", phone: "+1234567890", date: "2024-01-15", status: "confirmed" },
        { id: 2, name: "Sarah Johnson", email: "sarah@email.com", phone: "+1234567891", date: "2024-01-16", status: "confirmed" },
        { id: 3, name: "Mike Wilson", email: "mike@email.com", phone: "+1234567892", date: "2024-01-17", status: "pending" }
      ],
      2: [
        { id: 4, name: "Emily Davis", email: "emily@email.com", phone: "+1234567893", date: "2024-01-18", status: "confirmed" },
        { id: 5, name: "David Brown", email: "david@email.com", phone: "+1234567894", date: "2024-01-19", status: "pending" }
      ],
      3: [
        { id: 6, name: "Lisa Anderson", email: "lisa@email.com", phone: "+1234567895", date: "2024-01-20", status: "confirmed" },
        { id: 7, name: "Robert Taylor", email: "robert@email.com", phone: "+1234567896", date: "2024-01-21", status: "confirmed" },
        { id: 8, name: "Maria Garcia", email: "maria@email.com", phone: "+1234567897", date: "2024-01-22", status: "pending" },
        { id: 9, name: "James Miller", email: "james@email.com", phone: "+1234567898", date: "2024-01-23", status: "confirmed" }
      ]
    };

    const eventSelect = document.getElementById('eventSelect');
    events.forEach(event => {
      const option = document.createElement('option');
      option.value = event.id;
      option.textContent = event.name;
      eventSelect.appendChild(option);
    });

    eventSelect.addEventListener('change', function() {
      const eventId = this.value;
      displayParticipants(eventId);
    });

    function displayParticipants(eventId) {
      const tbody = document.querySelector('#participantsTable tbody');
      tbody.innerHTML = '';
      
      if (!eventId) {
        updateStats(0, 0, 0);
        return;
      }
      
      const eventParticipants = participants[eventId] || [];
      
      eventParticipants.forEach(participant => {
        const tr = document.createElement('tr');
        const initials = participant.name.split(' ').map(n => n[0]).join('');
        
        tr.innerHTML = `
          <td>
            <div class="participant-info">
              <div class="avatar">${initials}</div>
              ${participant.name}
            </div>
          </td>
          <td>${participant.email}</td>
          <td>${participant.phone}</td>
          <td>${participant.date}</td>
          <td><span class="status ${participant.status}">${participant.status}</span></td>
        `;
        tbody.appendChild(tr);
      });
      
      const total = eventParticipants.length;
      const confirmed = eventParticipants.filter(p => p.status === 'confirmed').length;
      const pending = total - confirmed;
      
      updateStats(total, confirmed, pending);
    }

    function updateStats(total, confirmed, pending) {
      document.getElementById('totalCount').textContent = total;
      document.getElementById('confirmedCount').textContent = confirmed;
      document.getElementById('pendingCount').textContent = pending;
    }