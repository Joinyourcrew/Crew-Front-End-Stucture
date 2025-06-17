/* shared-functions.js */
const CrewUtils = {
  generateSecureRandom: function() {
    const crypto = window.crypto || window.msCrypto;
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] / (0xffffffff + 1);
  },
  
  fetchUnreadMessages: async function() {
    try {
      const response = await fetch('/api/messages/unread');
      const { count } = await response.json();
      document.getElementById('notification-count').textContent = count;
    } catch (error) {
      console.error('Error fetching unread messages:', error);
    }
  }
};