import * as React from 'react';
import { object, string, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { PromptFromData } from './types';
import ErrorMsg from './error/ErrorMsg';

const resolver = object({
    prompt: string().required(),
    model: string().required(),
    height: number().required(),
    width: number().required(),
    iters: number().required(),
    samples: number().required(),
    scale: number().required(),
    scheduler: string().required(),
    seed: number().required(),
    steps: number().required(),
});

function PromptForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PromptFromData>({
        resolver: yupResolver(resolver),
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <div className="mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 lg:py-0">
            <div className="w-full  rounded-lg bg-white p-6 shadow dark:border dark:border-gray-700 dark:bg-gray-800">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                    Base options
                </h1>
                <form className="space-y-6" action="#" onSubmit={onSubmit}>
                    <div className="">
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Prompt
                        </label>
                        <input
                            {...register('prompt')}
                            type="text"
                            name="prompt"
                            id="prompt"
                            placeholder="prompt"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                        />
                        {errors?.prompt && (
                            <ErrorMsg msg={errors.prompt.message}></ErrorMsg>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Model
                        </label>
                        <input
                            {...register('model')}
                            type="text"
                            name="model"
                            id="model"
                            placeholder="model"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                        />
                        {errors?.model && (
                            <ErrorMsg msg={errors.model.message}></ErrorMsg>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Height
                        </label>
                        <input
                            {...register('height')}
                            type="number"
                            name="height"
                            id="height"
                            placeholder="height"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                        />
                        {errors?.height && (
                            <ErrorMsg msg={errors.height.message}></ErrorMsg>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Width
                        </label>
                        <input
                            {...register('width')}
                            type="number"
                            name="width"
                            id="width"
                            placeholder="width"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                        />
                        {errors?.width && (
                            <ErrorMsg msg={errors.width.message}></ErrorMsg>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Iters
                        </label>
                        <input
                            {...register('iters')}
                            type="number"
                            name="iters"
                            id="iters"
                            placeholder="iters"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                        />
                        {errors?.iters && (
                            <ErrorMsg msg={errors.iters.message}></ErrorMsg>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Samples
                        </label>
                        <input
                            {...register('samples')}
                            type="number"
                            name="samples"
                            id="samples"
                            placeholder="samples"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                        />
                        {errors?.samples && (
                            <ErrorMsg msg={errors.samples.message}></ErrorMsg>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Scale
                        </label>
                        <input
                            {...register('scale')}
                            type="number"
                            name="scale"
                            id="scale"
                            placeholder="scale"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                        />
                        {errors?.scale && (
                            <ErrorMsg msg={errors.scale.message}></ErrorMsg>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Scheduler
                        </label>
                        <input
                            {...register('scheduler')}
                            type="text"
                            name="scheduler"
                            id="scheduler"
                            placeholder="scheduler"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                        />
                        {errors?.scheduler && (
                            <ErrorMsg msg={errors.scheduler.message}></ErrorMsg>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Seed
                        </label>
                        <input
                            {...register('seed')}
                            type="number"
                            name="seed"
                            id="seed"
                            placeholder="seed"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                        />
                        {errors?.seed && (
                            <ErrorMsg msg={errors.seed.message}></ErrorMsg>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Steps
                        </label>
                        <input
                            {...register('steps')}
                            type="number"
                            name="steps"
                            id="steps"
                            value={50}
                            placeholder="steps"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                        />
                        {errors?.steps && (
                            <ErrorMsg msg={errors.steps.message}></ErrorMsg>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PromptForm;
