import * as Dialog from '@radix-ui/react-dialog'

// Components
import { ButtonLink } from './Button-Link'

// lucide-react
import { MenuIcon } from 'lucide-react'

export const Menu = () => {
    return(
        <Dialog.Root>
            <Dialog.Trigger className='sm:hidden'>
                <MenuIcon color='white' size={25} />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Content className='absolute top-14 right-1 bg-zinc-800 px-2 py-5 rounded-md'>
                    <nav className='flex flex-col gap-4 items-center'>
                        <ButtonLink name='Home' path='/'/>
                        <ButtonLink name='Novo Video' path='/newvideo'/>
                    </nav>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}