function showSection(section) {
  document.getElementById('login-section').style.display = section === 'login' ? 'block' : 'none';
  document.getElementById('signup-section').style.display = section === 'signup' ? 'block' : 'none';
}

function loginUser() {
  const nameInput = document.getElementById('login-name');
  const mobileInput = document.getElementById('login-mobile');
  const roleInput = document.getElementById('login-role');
  if (!nameInput || !mobileInput || !roleInput) {
    alert('Login form is not visible or inputs are missing.');
    return;
  }
  const name = nameInput.value.trim();
  const mobile = mobileInput.value.trim();
  const role = roleInput.value;
  if (!name || !mobile) {
    alert('Please enter both name and mobile.');
    return;
  }
  fetch('https://break-fast-backend.onrender.com/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, mobile, role })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Server error: ' + res.status);
    }
    return res.json();
  })
  .then(data => {
    if (data.success) {
      localStorage.setItem('name', name);
      localStorage.setItem('role', role);
      if (role === 'admin') {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'menu.html?name=' + encodeURIComponent(name);
      }
    } else {
      alert('Login failed');
    }
  })
  .catch(err => {
    alert('Login error: ' + err.message);
  });
}

function signupUser() {
  const nameInput = document.getElementById('signup-name');
  const mobileInput = document.getElementById('signup-mobile');
  const roleInput = document.getElementById('signup-role');
  if (!nameInput || !mobileInput || !roleInput) {
    alert('Signup form is not visible or inputs are missing.');
    return;
  }
  const name = nameInput.value.trim();
  const mobile = mobileInput.value.trim();
  const role = roleInput.value;
  if (!name || !mobile) {
    alert('Please enter both name and mobile.');
    return;
  }
  fetch('https://break-fast-backend.onrender.com/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, mobile, role })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Server error: ' + res.status);
    }
    return res.json();
  })
  .then(data => {
    if (data.success) {
      localStorage.setItem('name', name);
      localStorage.setItem('role', role);
      if (role === 'admin') {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'menu.html?name=' + encodeURIComponent(name);
      }
    } else {
      alert('Signup failed');
    }
  })
  .catch(err => {
    alert('Signup error: ' + err.message);
  });
}