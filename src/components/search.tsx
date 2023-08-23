"use client"

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { searchSchema } from '@/lib/validations/search';
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from 'zod';


interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {};

type FormData = z.infer<typeof searchSchema>


export function Search({className,...props}:SearchProps){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: zodResolver(searchSchema),
      })

      const [isLoading, setIsLoading] = useState<boolean>(false)

      const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

      const onSubmit = async (data: FormData) => {
        setIsLoading(true)

        const q = data.q

        router.push(`/search?q=${q}`)
        setIsLoading(false)

        const query = searchParams.get('q')
        console.log(query)


      }

      return (
        <div className={cn("grid gap-6")} {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    <div className="grid gap-1">

                <Label className="sr-only" htmlFor ="search">
                    Search
                </Label>
                <Input
                    id="search"
                    type="search"
                    placeholder='Search for torrents'
                    disabled={isLoading}
                    {...register('q')}
                />
                </div>
                <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
            )}
                    Search
                </button>
                </div>
            </form>

        </div>
      )

}
