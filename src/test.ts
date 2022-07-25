interface todo {
	title: string;
	completed: boolean;
}

type optional<T,K extends keyof T> = {
	[ObjK in K]?: T[ObjK];
};

type MyPick = optional<todo, 'title' | 'completed'>;

const a: MyPick = {
	title: "test",
};

const test = () => {
	console.log(a);
};

test();
