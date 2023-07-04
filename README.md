# Directory structure not maintained

This repo reproduces an issue where the directory structure of the copied files are not maintained in the destination.

## Source directory structure

```
resources
└── views
    ├── app.edge
    └── nested
        └── baz.edge
```

## Code to copy the files

```ts
await copyFiles(['resources/views/**/*.edge'], join(BASE_PATH, './build'), {
	cwd: BASE_PATH,
})
```

## Expected output

```
build
└── resources
	└── views
    	├── app.edge
    	└── nested
        	└── baz.edge
```

## Actual output

```
build
├── app.edge
└── nested
    └── baz.edge
```