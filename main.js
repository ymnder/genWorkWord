const store = {
    outputImage: null,
    text: {
        content: "五千兆円欲しい",
        output: "五千兆円欲しい",
        name: "IT・20代",
        outputName: "IT<span>・</span>20代",
        color: "#009051",
        font: "bold sans-serif"
    }
};

const methods = {
    onSave: () => {
        html2canvas(document.querySelector("#generator-frame")).then(canvas => {
            vm.outputImage = canvas.toDataURL();
        });
    },
    onInputContent: () => {
        vm.text.output = vm.text.content.replace(/(?:\r\n|\r|\n)/g, '<br>');
    },
    onInputName: () => {
        vm.text.outputName = vm.text.name
                                    .replace(/(・|／)/g, '<span>$1</span>')
                                    .replace(/[^<](\/)/g, '<span>／</span>');
    },
};

const vm = new Vue({
    el: "#app",
    data: store,
    methods: methods
});