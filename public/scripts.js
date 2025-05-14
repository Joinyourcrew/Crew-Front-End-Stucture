document.addEventListener('DOMContentLoaded', () => {
  // Placeholder for token stats (replace with API call)
  const tokenStats = document.getElementById('token-stats');
  if (tokenStats) {
    // Simulate fetching token stats
    setTimeout(() => {
      tokenStats.textContent = 'Crew Token Stats: Total Supply - 1,000,000 | Burned - 50,000';
    }, 1000); // Simulate API delay
  }
});

// Tab switching for projects page (assuming this was the previous content)
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');
  document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Form submission (placeholder for backend integration)
document.getElementById('apply-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const xAccount = document.getElementById('x-account').value;
  const role = document.getElementById('role').value;
  const projectType = document.getElementById('project-type').value;
  const projectDesc = document.getElementById('project-desc').value;

  // Placeholder: Verify X account age (>1 month) and CREW token holdings
  console.log('Verifying X account and token holdings...');
  // Example: Fetch X account data (requires X API or TILT integration)
  // const xAccountValid = await verifyXAccount(xAccount);
  // const tokenHoldings = await checkCrewTokenHoldings(xAccount);

  // Placeholder: Submit to backend
  const application = { xAccount, role, projectType, projectDesc };
  console.log('Submitting application:', application);
  // Example: Send to backend
  // await fetch('/api/apply', { method: 'POST', body: JSON.stringify(application) });

  alert('Application submitted! (Placeholder response)');
});
