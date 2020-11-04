import promptly from 'promptly';

export default async (str) => {
    const name = await promptly.prompt(str);
    console.log(`Hello, ${name}!`);
};
