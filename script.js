<head>
  <link href="https://fonts.googleapis.com/css?family=Consolas" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="style.css">
</head>


<body>
  <img class="ideh" id="ideh" src="https://user-images.githubusercontent.com/76872415/221301905-6e89c7dc-ba7b-4749-852c-f5249744c5a7.png"/>

  <div class="logo-container">
    <img class="cit" id="cit" src="https://user-images.githubusercontent.com/76872415/221301909-1682023b-33a7-4eb4-8ade-e56658a3dc8a.png"/>
    <img class="thnb" id="thnb" src="https://user-images.githubusercontent.com/76872415/221375629-7fd61049-ddda-4a65-b50e-9f5ef645e0db.png"/>
  </div>

  <div id="timer">
    <div id="counter">00:00:00</div>
    <div id="description">Until the CTF begins</div>
  </div>

  <button id="start" type="button" onclick="startTimer()">start</button>

  <div class="picker" id="picker">
    <div class="start_picker">
      <input id="date-picker-start" type="date" value="2023-02-26"/>
      <input id="time-picker-start" type="time" value="00:00"/>
    </div>

    <div class="stop_picker-end">
      <input id="date-picker-end" type="date" value="2023-02-26"/>
      <input id="time-picker-end" type="time" value="09:00"/>
    </div>
  </div>
</body>

<script src="script.js"></script>
