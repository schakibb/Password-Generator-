document.addEventListener('DOMContentLoaded', () => {
    const passwordEl = document.getElementById('password');
    const lengthEl = document.getElementById('length');
    const lengthValueEl = document.getElementById('length-value');
    const uppercaseEl = document.getElementById('uppercase');
    const lowercaseEl = document.getElementById('lowercase');
    const numbersEl = document.getElementById('numbers');
    const symbolsEl = document.getElementById('symbols');
    const generateBtn = document.getElementById('generate');
    const copyBtn = document.getElementById('copy-btn');
    const copyIcon = document.getElementById('copy-icon');
    const checkIcon = document.getElementById('check-icon');
  
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
    lengthEl.addEventListener('input', (e) => {
      lengthValueEl.textContent = e.target.value;
    });
  
    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyToClipboard);
  
    function generatePassword() {
      let chars = '';
      if (uppercaseEl.checked) chars += uppercase;
      if (lowercaseEl.checked) chars += lowercase;
      if (numbersEl.checked) chars += numbers;
      if (symbolsEl.checked) chars += symbols;
  
      if (chars === '') {
        passwordEl.value = 'Please select at least one option';
        return;
      }
  
      let password = '';
      const length = lengthEl.value;
  
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
  
      passwordEl.value = password;
      copyIcon.classList.remove('hidden');
      checkIcon.classList.add('hidden');
    }
  
    function copyToClipboard() {
      if (!passwordEl.value || passwordEl.value === 'Please select at least one option') return;
  
      navigator.clipboard.writeText(passwordEl.value).then(() => {
        copyIcon.classList.add('hidden');
        checkIcon.classList.remove('hidden');
        
        setTimeout(() => {
          copyIcon.classList.remove('hidden');
          checkIcon.classList.add('hidden');
        }, 2000);
      });
    }
  
    generatePassword();
  });