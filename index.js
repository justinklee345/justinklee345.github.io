function handleKeyDown(e) {
    if (e.key == "Tab") {
      e.preventDefault();

      const start = this.selectionStart;
      const end = this.selectionEnd;

      this.value =
        this.value.substring(0, start) + "\t" + this.value.substring(end);

      this.selectionStart = this.selectionEnd = start + 1;
    }
}

async function formatCode() {
    const inputCode = document.getElementById("inputCode").value;
    var selected_language = document.querySelector('input[name="btnradio"]:checked').value;

    const url = "https://asia-northeast3-cv-automation-395116.cloudfunctions.net/cv-formatter?"

    const response = await fetch(url + new URLSearchParams({
        input_code: inputCode,
        lang: selected_language
    }))
    console.log(response)

    const formattedCode = await response.text()

    document.getElementById("outputCode").value = formattedCode;
}