<script lang="ts">
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	export let wordArray: string[];

	const timeout = (time: number) => {
		return new Promise((resolve) => setTimeout(resolve, time));
	};

	const decodeChar = (element: HTMLElement, word: string, expectedWord: string, i: number) => {
		element.innerText = word
			.split('')
			.map((letter, index) => {
				if (index <= i) {
					return expectedWord[index];
				}
				return letters[Math.floor(Math.random() * 26)];
			})
			.join('');
	};

	const addEncodedWord = async (element: HTMLElement, length: number) => {
		for (let i = 0; i < length; i++) {
			const randomText: string = `${element.dataset.value}${
				letters[Math.floor(Math.random() * 26)]
			}`;
			element.dataset.value = randomText;
			element.innerText = randomText;
			await timeout(100);
		}
	};

	const removeWord = async (element: HTMLElement) => {
		while (element.innerText.length > 0) {
			element.innerText = element.innerText.slice(0, -1);
			await timeout(100);
		}
	};

	const decodeWord = async (element: HTMLElement, word: string) => {
		element.dataset.value = word;
		const expectedWord = element.dataset.value;

		if (!expectedWord) return;

		for (let i = 0; i < expectedWord.length; i++) {
			decodeChar(element, word, expectedWord, i);
			await timeout(100);
		}
	};

	const onLoad = (element: HTMLElement) => {
		const awaitLoad = async () => {
			while (true) {
				for (let word of wordArray) {
					element.dataset.value = '';
					element.innerText = '';

					await addEncodedWord(element, word.length);
					await timeout(250);
					await decodeWord(element, word);
					await timeout(1000);
					await removeWord(element);
					await timeout(1000);
				}
			}
		};

		awaitLoad();
	};
</script>

<h1 use:onLoad class="md:text-2xl sm:text-xl text-base">&nbsp;</h1>
