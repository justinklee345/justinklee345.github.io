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
    console.log("well hello there?")
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const formatted_code = await response.json()
    console.log(formatted_code)

    const url = "https://asia-northeast3-cv-automation-395116.cloudfunctions.net/cv-formatter?"
        // new URLSearchParams({ name: "Justin" }).toString()

    const testing = await fetch(url + new URLSearchParams({
        name: 'Justin'
    }))
    console.log(testing)

    var inputCode = document.getElementById("inputCode").value;
    console.log(inputCode)

    var selected_language = document.querySelector('input[name="btnradio"]:checked').value;
    console.log(selected_language)

    document.getElementById("outputCode").value = formatted_code.message;
}