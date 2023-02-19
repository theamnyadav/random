// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <nav className="bg-white shadow-md mb-8 py-6">
//         <div className="container mx-auto px-6 md:px-0">
//           <div className="flex items-center justify-between">
//             <div className="text-2xl font-bold text-gray-800">My App</div>
//             <div className="flex space-x-6">
//               <a
//                 className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
//                 href="#"
//               >
//                 Home
//               </a>
//               <a
//                 className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
//                 href="#"
//               >
//                 About
//               </a>
//               <a
//                 className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
//                 href="#"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div className="container mx-auto px-6 md:px-0">
//         <div className="flex flex-col md:flex-row justify-center items-center mt-12 mb-8">
//           <div className="text-center md:text-left md:w-1/2 mb-4 md:mb-0">
//             <h1 className="text-3xl font-bold text-gray-800 mb-2">
//               Welcome to My App
//             </h1>
//             <p className="text-xl text-gray-700">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//               at ipsum eu nunc commodo posuere et sit amet ligula.
//             </p>
//           </div>
//           <div className="w-full md:w-1/2 mt-4 md:mt-0">
//             <img
//               src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFBUZGBgaGxsaGhobGhgaIRohGxoaGh0aGhobIS0kGx0qIxsYJTcmKi4xNDQ0GyM6PzozPi0zNDEBCwsLEA8QHxISHzErIyszMzM1MzM1MTMzNTMxMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//AABEIAKYBLwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABBEAABAwIDBQUFBQYGAwEBAAABAAIRAyEEEjEFQVFhgQYTInGRMqGx0fAUQlKSwQcjYnKCohUWU9Lh8TNUwrJD/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAIBAwQFBv/EAC4RAAMAAgEDAgQEBwEAAAAAAAABAgMRBBIhMUFRBRMigRRhcaEjMjNSkbHB0f/aAAwDAQACEQMRAD8A9FJQykSmZfl+i0GXYiU0q27Ctix6lVA2RM/XLihNMGmgXOQuciLL62nX1+Q9Uu7HG/r8E3YXuRPco3OUrqY/FwiecoDRvrrvAn1vqp2hWmQOKhc5SP1PJQkp0I2IlROKdxUZKZCthNpk6fXPy5qpia9Nr+7zgviSBNp3Gd/LdKba20alOke6b4t7rTHAA/Hdwm45LY+HqOcaj7E6N4DnxKeZ9WVtnWlyGVEwowgBFAU7ihJQKIlMkUJKkByUyZJACKAhOSmUgCUycpiEAMkU8JoQAJQlEQrFHAOc3MC0DKXXJGhIImLab7XHFDaQJN+Cg5A5aeJ2W9oc4uZ4dRmvpNgRfVUaFHOSA5rYE+IkTcCJjmpVLQdLT0VSgK1f8GqX8VMRxcRumLiZ0tzCzsPQNRwYC1sg3ccoENLrndopVJg5ZVcgK2H7DqCfGw6fe1zOLRFr34cQq9HZb3l4Dm+Awbm+ukC+inqQdNexmkIIUhQlMQeuuKjciLlE9656NzCNV0RJjgoi5AXoC5MkK2SAoHOQl6je9TohskTFyjc9AXqRWx3OURKZz0GZMkK2ESrWzKDX1AHCWgEuuRYA3t0VFz1LSx/dtfaczCBGuoMeR09FVyOpY24W3p6Q2PpdLq8bK20KgNcUGUzmImPMnKL74B38EJwBaJeWstMPMH8uo9FibOdV711eoSHudmsT4dwaD5WVTH1sW8vbnytda1zYzIiA07tJvqqsUZ4xzO9vXdv3K+RSq24Wl+xuMqNOhBjgZRgrL2Vhe7YGrRW7RWEShJSlCSgBSmKRTFACSCZKVIDFKEkkANCYhOSmQAimKdCUACSo3KQhC5SBC4KJymeoHFMALgoyjcVEVIAkIXIiEzlIoBCEo0xQB6WwZRa31wH1zVc4ghxaeio7MxmakBvbY/ofJHWfcHofL6+CxT37mn5ia7F01UJeqoenL03SR1E5emL1DnTZlOiNkjnIHPTF6jLlKRDYTnIcyElCXKSBy5A8pFyCUEbBLUBYpHFC5MAICeUijGHNhIzEAht5MxEWibgxwQKRpkfcv/Cf+/oJfZ3RMbwOZkTYcIv1RsnTIyhUhpOv4Tax95/QoTRd+E8feB8SPVGw0BKYlG6i8QS03MDmZIj1B9Eu5d+E/QJ+AJ6FBGmAnKJ9B4ElpAGvrHxUYUgIpJFMEAJMUpSQAKFyJyEqQIXqByslhJAaJJIAHMqfbzaeDpNJAfWfZua7W8XZd4HNJkyzC2zXxuJeetSZoYToCfIErTwOx5Z31cllIabi75D3lcJXxdR5lz3E+dugFgrmAxznRSqOcWE2ufCdxHyWGufT7StHbxfBoml1vf5aNvEYhlR5FJmVosBcmB95xJ1+CrlybGYoM/dU25Ys929x4Dlz3qBj1v4/U4XUcX4hGKczWLx+y/IsFCUwcnK0GE2cBiMlSPuut8vgR5NW0eHGyo/ZnvjNlAGjGtDQOvtOPMmVZNZrPaIcfwgT6iRHUg8lz8SpTpjY5aXcNjtx1FkeZVjiS90kAeWus3PXcApQ0kWFuO4dVd+pYlt6RIXJSo2uH4m/mb80bgRqCOihUn4Y1Yrnymv1Qi5ASkSgLlJWEXICUiUBKkAiUMppSUijymKt7MwTq1QMaYm5PADUxv3Dqtt+ysGx2R1chwsfE0QfywPIlJWRS9Fk43S2cuVJ9pMh0CQAJvuGUb4nTTgre3Nnig8Na8ODhmHEDdO6/FbP+X8M2mypVquZnDTdzAJLZgS1Q8kpJ+5M4m217HNMxTgALQARv0Oad/8AEb6pzjHawN+k/eaGka8AFvu7N0ajCcNXzEcS1w8jlAy+i5Z7SCQRBBgjgRqFM1NeCLmp8k4xEB0e07Xl5b51RNxzpmG6zv1zZideMegW32d7Osr0zUqFwBMMykCQLEmQd9ui5/G4c06j6btWkj5HrYoVTTa9gc1Mqn4YvtJzNdaWxHT6PqjZjXDQCIAiNAGubH9xTbPwT6zwxgubknRo3k8Aujq7DwdGG1q5zbwCB/aASB5lFXMvTCIqlteDmX4kkZbRAE77OLveXH0CildBtjYFNlLvqNUPZwJBmTHhc2xPKEexthUH4fv6r3Mu7MQWhoAdA1aUfNnp2T8qm9HNkpArqP8ACtnf+0fzs/2Ln9p0qbKrm0X5mCMriQZ8IJuABrKJyKnoisblbeisSlKCU0q3RWEmlCSmlToEXNlkCswnn65TCyf2ikmpSd93I4DzmfkrWeDINxccoUG18ZTqU+7qgjeHC8HiOHkVl5OGrX0nZ+GcuMf012OLcVZ2VRL6rGjiPddJ2Dv4alMjiXZT1Dv0lX8JjKeGae7IfVIgOAOVnME+0fKy5sce3WtM7l8rFM9W1/ksbVeO/eBuIHUAA+8KJhWdSqGZNzqeauMcu/E9MpHjs19VuvdtlppSL1G1yIlMVHV1K7nWJgcG26E6kctFG1saJ3hR1qmRpcNTZvLi7oI6kLJdKJbL8OKs2RQvLCq4oMOVozP9Q35n3Dmg+y1Kl6jj5Tp8vcrPZzZoqVGB0XIJngLkDmvR6uCpBuUU28gGiekXHmuZd1T2/wDB6WflcVKJnv6s81ZstvBT0sI9n/jcRxGoPm02K2Ia+rkFjmDehg3HGCukbTo0w1uQXnxEA6cSeqh2pSZdlzpLTW9nEm40hw1buPNu/p6cFCHTotXbL6YqQyBLQ9sbpJEe5YeIfleOD7jkR7Q+B6rdx8vUtHG5/ESn5sLS9V7E0pFCHJStJxx5TEoUpUgaewtoNoVg9wJBaWmNQCQZjfdoW5X2Nh8S5z6NYBziXEAhwk3Jy2IkrA2NQovqZazsojw7pJsJdoI15/HWf2RfmllUZdQbgj0tPULPk0q3vTNOLbnWtr9zG2vsx+HcGvggjwuGhj4EWsum21s+pWw1BtNskBpNwLZI3lUe2WMYWspNdmc27jrFovzNyrXaDGPp4Wgabi0nICQd2TRK6qul+oyUy6Xp2G7N7IqYdz6tYtaMpEZgd4JJIsAI965jETXxDsg/8jzl/qcYJ+KhxWPq1BD6jnDgXEj00W/2MwozPxD7NYCATxiXHo3/APSfThOn5K01bUrwXNvYx2HNClRa4inD3QDcCwaY4+InzCq9tMIDkxDfZeA13nEtJ6SOgUT+2VaTlYyJMSHTG6fFqtTAY/7fQq0nhrXDSJji11zucLqtKp1TX6/ctdRe5T8+PsV+xDQ2nWeBLgQOjW5o6krj6tYvcXuMucZJ4kra7M7VGGqOZUsx3hd/C5pIkjhqCtLHdkRUd3mHqMyOuAZIE/hcJkclZ1Kbbr19SvpdwlPp6HI5zESYmY3TpMcYXcbCoNqbOLHPytcXguMW8c77LJ2vsShh6Pjq5q5MgDfyy7h/Ef8AhauwsKauzjTBDS4vEnQeOf0UZaVQmvcbFLmmn7FI9mMP/wC23+z5rl8SwNe9oOYNc5oPEAkA24rpf8kVf9Vno5c/tbAGhUNNzg4gAyJi4lPiab1vZXll63rRUlNKaULnLQigcvUbqi1ezuzxXrBjhLACXC46SNFvY/sPTM91Ucw8HDO39CPUqqs0zXSyyMVXPVJwz6yqVqgK2Ntdna2GAdULCwvazO1297g0AggHU7gVzeJrU8xax4cBIzAgg3PsneIi6sm4p9mDx3PlENam0qsacKySo6rbE8lboEyNgWjgKbXhzTaAXZ7w2Bo7kbC15jXRehVuzVNraYGCp1AGMDyPA/NEE5g4TuOm/wBIX9nMLlIdhsSxuUvORznXa5zYiSCYgjWzt11k/Fx7M0vi17o4FoUmVdbU7M4KA4V69OSWgVKc3AYSMuQEnxt623FZG3tlNwzmBtXOHszg5ckCYFpOt/RXY8009IovBUrb8Go9V8SyXMHBs+rj+gap3FLLJaeUejj+hCyclfT9zofB9fPe/ZlvCVDTc1zdW3CnxvaUhpGQkmRw1AAh0yCCCc2t1XhQ1KAKw1Gz0FY5p7pEWy8RUe/PfMXSInXcB5WHRbm1NquyQ+m9p3gWHv09Fd2HQZRp964AuOh/CNP0VPEbfZVlrmggGbaRwImb7iOE6EKm3OullV0qr+XsjmKeIfUqFxECA0DWAJgT1Pqptt2ptd+F7f7gR8loVKAY+IBGo5g3HqFl9q6/7gSGgvqMADRAES4wJ5BbOOumkkRzOl4Hrxokw1SQFNmVDZ7vCFdC6TPIBSlKFFltKgASUTapAgOIHAEwno1iwy3XTQH4qU46pESPQfw/7QoJWitKZzuanfi3uEEzedBrJP8A9FJmLe0AAiByB3yp7h2K0piVbbjqg3j8rfkoaVdzdDw3DcZR3DsQSnLlb+3VOI4ey35IKmLe4EE662HEHd5BHcOxWlOyq5vsuI8iR8FMzFvaIBEX3Df0SqYp7pki+tgNTO7mpDsViUi7n71YbingQCLknQamDbhoNOCTcbUG8al2gNzHyR3DsV854+9MVZOOqQRm1EaDSMvC1lXe8kknUmT1KlEPQBQORlCGkkAamw6qRKZ2/YPBxTfVI9owPILpyodkYUU6LGcGj3qxUMAm3W3vXJut037nXwx0wkZ20Nm0MXTyVQHs1EOIiWlshzSCDDnDqq+zuymFo0jRbSa5hc50PAf7RmJIkgaCd0K27A0xJDTTJEZm235rESBdXcMzKwDOXkfeOpvvUFxxW0uwGFIJpl7DyMj0NlztTsRVztaxzXtkEz4TlzQbXm3kvTNovsqmytXvPHKOlvjKecuReG/9lbww/KLdcEaddNPmoxVO8GbfdPrMqXEVgRoDydb3iYULqg+81w5iXD1aT71WXEjK0mIG+dRvHEb5Xl/7RK047KPuUqbY4SXv/wDoL0+m9p9l0jzBheOdtXubj676jXMa5zQx7mua1wbTY3wuIg+ydCtHFpK+5RyZbjsb5RYZ4nKd9x57x1/RRyoaoWu4VLTOfgzPFatehrliQaocBtKm793XOQ/dqbv6uHwWpUwL2glrQ4EWc0Z7WuBqPNYbhy9M9Xh5MZZ3LCpNDmGk6zmzkkxrq0853czwWJ/hdKk4GpVa0kzAJOsx4WyfVXHs3R0I/QqSls1wHhD2tiXFxLG3HiubaWmD+iz3iTex3CT260gDXFRxy0yNGsMkEgDRzdOJlcf2nxoqYhtJhltKQSNC8+16QB6q/t/tTTptdSwjs9R1n1R7LRvbT/Ef4v8AoYOxMGZki/0ZJ/Vb+Ni6fqZyviHLnp+VB0OBbDQrrW9P18hqeij7ynSaCfG7QAXudzW7/N0DkVF9ocZLmtBMaXMCRBMCdeA09NG2/Bw9JeS7WxLKbRDC5x0kfobNHmHGVVdiajjL8txAtMCQbE+Q0j3qF9XMbp8yFK9Q6n6EjXqQFQjcfq30FIwphSQJZUTQjDVAE+B2XVrT3bC4DUyAByknVXf8r4r/AEx+ZvzXUdka7DhwxpGZpdmG+7iQfKCLq67C1S+e98OYnLBBggiJB3S38s71jvPSppI24+NFSm2cV/lXFf6Y/M35pv8AKuK/0x+ZvzXbfZKkt/emA1gIvJLXAuMg/eGYHXUaRcG4Kv8Aerz4SLNy3LiQbG0SBHIX1mPxF/kP+Gj8ziv8q4r/AEx+ZvzWbjsBUpOy1GFp1GhkcQRYr0vD4aq1wLqktBdIvcEmBfSJb+XmVgducQwhjBBeHZv5REX4Tb0T4s9VWmirLx4mdpnFQmhSwmIWsyEUICpiFG5SAC0+zOD7zEMBFm+I9Pr3LNhdp2CwfhfVI9o5R5DX3yqs9dON/n2GxR1WkdedFGx7XaEHl8xuR1CoC0HUA+d/jf0XNOwH3A3eHyson0yL2dG8+E+oRXGhI8/F7jp6oK9YRr+iAMbbeKLWyPaJAHmTHu/RLYmKa6kA3VtieJnXmDr1WP2kry4NmIBJPAu8I92c9FPsSmA2W6aWNvKfSwR6m28Uzx1T8tm3WqDePT5GwUOcbiPUt9+9NUM/KP0/UqB/H6/N+gTGIkeJ1HUi/RzTbeuf7f7YOGwbnDKXOexjA4SJnMZB/ha7rC3qDLzy0uPd+pXlv7Wcfnr06ANqbczv5qm4jiGtaf61Gt9hk9dzbJQlBmSldbRwyKtTlUmVK9H/AMFZ7OQMt/K6W+5aLigLFGk+zGi6l7l6KlTtXtMCO+65GT8Fi4/E4vEf+atUeOBMN/KIb7l0DqITCiOCFjleEWvk5GtNmHgtlQQSt7Csy6AXBF7i4/Sx6ImshSAJnprRT1PeyGpu5I8yJ7bT9cvrkogEEBI0ICIIIJWEQZ0ALufhEmOl+iHEY2lTjvC1k6ZqjRMcCWiU9NmY5ZiQQfKDPulc52rrFtKnUbMh40MRnpuGo6LJnupfZmvjxNLujoKG2KLnBrHse42DW1WOJ5ABskq8Kj91F56u/wBi8r2LiwMXh3BoaG1aZMR+Mb44FeuGqxrnAU2Qf4G7osYFxYa8Aslci16mueND9CIOqajD1P7v9ir4ravdkNqNLCdA+pkJ8g5glatDFNmO7ZxPgGu/yNz6rH7Z4QYirShknJ4nZiJGY5QBHhIIJnnySzyab0RlwzC2kSv2iRqx9xI8ZvOkeC6b7eZjK6b27w7pB+5ug+i28Aw/Z6TXZmvFNrXlrokhrZHiBtviN4Vik/u2BpOYCTL3AkzumIEXG4JnnpCrFL9Dmam1WMbne7K2coc6qAJiYktiYvCibtagXZe8ZmJjL3rJJJ0jLMzuVb9p7muoUAIu9xkaENYQI/MuH2SM+Mwrtc1WkHebHtBP5YPUqFnp+pPyY3rR6W2rTkjeLHxi0az4bKYNZx/uH+1B9mYXE5GkzqQ3fzI5on4Onups0g+FukQBpyCb51+5P4ePYL7OwtLgZiZIcDECdMtzykKjUZBI1gx6LQwrQ2m6AGguiwgCSGEx6lUCtfHuq3sycmJnXSiIjcNV6rsTC91RYzg0E+ZXnuwMJ3mIY3cDmPk2/wAYXqDdEnKrbU+w3Dju6+wFTcozz+uvyRvYTdRkkfX17lkN4z3CLj0+Rss7GmRY68ZE9d/RXqrxoR9eWix9qVgxj6kzkaXeZAsJ5mNEDTLppI5C9bGOa24aQ0Efw+H45yu3pYbI0CI5/wDO7ouX7HYKf3jm3mbjUg2PGdT1XXmRoSPPxD33HqhGrmX9aheEtFR4/wCv+NT1Ubeh/T+rcrgy74nfaAehQPpApjGRsaGidBqeA68F8+7Qxv2zFVahmHvc4cQwWZ6ANC9527Qz4epTDywvY5geBmLcwIJAkSYnevIqvZZ2CqQ6oypnbLSAWkAGDmadJOkE+yU+OeqtCZb6YbN0vU9Ki52thz16D6Cv4TZ+8D+o/p/wJV1+EIDobMAGZ5mRlGm65N53LFyPjW9rCvu/+Gjj/BUmnmf2X/SjRwrRunz+o+tVBtYERUAsIa7yOh9fitFkRKeqwOaWuEhwII5FcnD8QyrOsl03r/XsdTNwcTwvHMpf+mIDKQCr0ZaXU3e0wx58D1EFHiMSym3PUeGN3F2/+UC7z/KCvZK5cqk+zPHPHSpzruSkJiuax3a8gxQpgx9+oJnyYDHUk+QXU9nnMxj2O9hj2ue4N+4WDxsE8HRE7nNO9Is0ttFj49pJkU+iZ7IJB+uYXQ1+zIhpp1mHNOVtTwE5bnSdB5KhiNl16Ql9LM0aOAziPNh08005ZrwyKxVPlGaEgVE6rJNgBynrqiBVpUSg/JYXadk4V4/CRHk14bPotkOVHa7M1Gs3+F0fkDvjKzcldkzTxX9TR5xQqZXtdwcD6EFeuVK4kkm3GP1led0ezlR7A9p8JEgnf7l0eJxFRoaXMbezSHOcHbvDDFy7ab7M6sRS9Dp6OIm0tPkJ/VV9s7YFF9Au+8x/L2Xj/csjY9V1TEU6VRvdh4eWuIcD4G5ohwaeq6LbHZTD120xVxDm5M2UtLBObKYOafwj1URL3v0FypUtGgNptfTbUYASWyJNjfLMD6Mck1LFknxFsG0HMNN+uh5ngq2E2dQoUxTbVLmsHtZmF1zwBHlooKuOw5EEvPnl6aO5qxyilJryc7+0bHB9OiAR4XPG/wDCzjouZ7HvBxlAbs+byLWuPwn3LsNr4DDYnKHPqNDMx8OQagTMyToqGx8Ds6lUbUZi3FzQ4NBgiXNLdAwE+16qOkfp29nTjFi025myM4oHn5X+CyXtwzbuxcCwk03j3kKtVxeFaJZimuO4BrhJGibY3SdE1/7sfxST/VmePfAVJzlYf4WNbuDY6jKPhmVJ0uMNBceABJ9Auhxl9Ozmcp7rRbwu0alF2ek4NdpcBwPIg/otrDftBqNgVqAcPxUzH9rvmudGz65//k/0VatSIJa4QRYg7ldWPHb9NlUXePx2R6Zs7tfg6sAVMjvw1BkPqbH1W42oHCWkEcQZ94XhtTDA7k+GxNal/wCOq9n8riPcqL4n9rNMcv8AuR7XVA4LmO1TCabWNHtvAPk3xdLhq5jAdtMUy1TLVHEjK71bY+i2KHa6lUe3vGOY0Dhmvv0WasNz6G7j8uFSr29zo9jYM06YEcFYePr/AI3IsDtOjUA7uqx3IEA/lN1Ze3iqxqrrfUZzh9fMo6dAyDu6j3KwaQRspgSbazPHlHqjZBk7Tpl2Vo69V5z2jrd5iahGjIpj+ix/uL16Jj8Rka+oRZjXO88oJA+AXlzQTc3JuTxJuStvEju6MfMrSUnbU84Hic06W0i+g5ckLqu6TaTaBPIjSNdSLgIQTafO9uh+tyT6gFjcxoIJPQf9Lx563RXmHcneIHz1+fVDjtoUaDc9ao1gOgN3O/laPE7oI5ocU12UkiIMiDyv5b15X2lptbiDlJIyMmZJkMANzxif6k/F4kZbap/mVczPWOFUrz2Nnbfa4PeXYellMZc9SHOIGhFO7Wm+/N0VLYFKniajxiC99RzZY4vN41HM6QJjWy54FTYbEOpvbUYYc0yP+eW5egiVMqV4Xg4c0vmdVLe33HxNA03upu1aY8+B6iD1XWfs42x3Nd1ExlrDK2fuvsQB/OGhvMhixNv1hU7usB7bTJ5g+yRuIl3SOCymPIIIJBBkEagi4I5gpmhW0q3Pg+j6mAcXNzU5yU3EPzSAXBwcwsBGYwf+VmbVxDqZp06TnMDWkw0ke25xjnYDXirHZDtVTxdBheQ2o5uV3AvHheAdxm8cHN4rX2lhGlpqCnne0AtaMsktBygFxECYm+5LPattC5N1LSZ51t/EGpiahJmHZAf5AGE9SCeqohyjeCCQ4EOBOYGQZ3yDeUxcurK1KRyqe22Shykdh3Pa8gEjKAYvE5hPpCang6hE5YETL3MpyImQahbI8l0bezjaYLaxa/M1roBdlAvrxMj3KnkVPTrfcu48vq3o4PZpqYdrWuawtAIvFpuYOXju81bw+18rpc3M0fckRfWbK92g7N4SplpMqU8O8OBjwlzgQQG5S8G5PuWCOx+GgkbQpkCJMMgTMSe8tMH0K5VYJp7Z1VmpIKrUZna9gcC3MPE/MSDMS43MaJ/tR8uo+KEdjcPLR9vZLoyiGS6bDKO8vPJC3shhSCf8QYQIkzTgTpJ7y0wfRWKElordt92EKx+G/oUZq/8AUhM3sbhZaPt7ZdGUfu5dJgZR3l5NrJN7HYOCf8QZDYzHNSgTpJz2lHSiNsF5JBAgS0geLeQQFWZgCI9ixBjyPHorw7GYOWj/ABBsujKM1KXSYGUZ7yZFt6dvYzBEE/4iyGxmOalDZsJOeyOlEqmu6I8TTNTIIptDYmHEzHmNTJVhmAafZawCdZvFt0XPtJM7FYElo/xFsu9gZqXiklvh8V7gi28LpOz3Z7ZoZ3TTQxTmkkvlj33NswaTAGihQh6y3T22ADnzX0AjqXT8AqL69Slnc0xLS2R5tP6K/wBoMPTwz2NpNyseHEtEwC3KJHCQRbksXHV8zCLC2pMD184C6ONfwzlZG1m+4I2tUP3z6pYXElwkmSZPvKyTRqBs92+Doe7fB8jEFX8HhajfDUY5jgA4BwgkOuJGrevFLgaVl2ZbhmkHSkaajZTcN0+V1Ixy2mEE0khSU7UUJg2Qd2tPZm18VTIbTqOdOjH+MWvbNcdCFUTZgLz7+iSpVeUNNuXtHY4Xta+3e4c6CXMd5CQ13M8VsU9u0HhwByuiYeC2JtM6RreV5uXfxe9Ru/mPDX3LPXFl+OxonlUvPc6vtXigMMGtIPePAkEHwt8ZuNbho6rjcqNjANIStuV2PGoWinLld1s3sKXVIM5QdI1j/wCenqrwptaXNHtNgm2sxvm5vvCSS8L6M93XZkNcSF5n2ywoDy4agNPQkgj4R1SSWjhv+KijlreFnLp0kl3jgGjs/wAdKrSO4Go08C3XoRZZwSSUsU639n1dxr/ZptUDnN4BzGkmeDXNEGN7W8F6lsra9bwtBDg5zWgPkxJjUXj1TJIXhi12onxWHpYt5p1WZK2XMyqz8MSA6etr8iFx+0sMcK4tJDn6hw0aJMFoP3yQb/d3SbhJK/A29IozpeTErVC6ZOuu+fM711HZCu91OpnqPeQ8AFznOgZRYSbDW3NJJX8lfQV8b+c5ntPi42kxuRhk0blsn70TfUblz+ExU0yO7p3qUtGxrTquF7xB5cU6S5xvJqeMPeMinTAZTplvh0PcGsLb4eSdeSh+1EUT+7pzI+7uFHvWjlBJ9YnekkgCxUxhbVcQynDKZLPAJaWUxUaecOM3lQPxxFLwspjxPB8DbimKTmbtxe42jVMkgC1UxrhUqwymO7D+6/ds8OSo3LuvGZ2s6qKpjXNbSDWUhncQ793TvlrQ37tok6RrKSSADqbTezvSG0x3YJpRTp+DLimgfdv7TjebmV0v7N31HVnFwpgOpBzcjGMIBdoS1o4zFxKZJBJtdtx+8o/y1PixcxioLCCJm3rZOkuhh/po5uf+oyt2fxLqbgxunh95MRbdfzW7tWsXVcziScon4AeVkklVi/nNOf8Aph0CrvdA6gH64pJLWzmsY4EfdMeaqxcjgmSUy+5A2QGxTtoj6+uSSSYkc0RH1yQikPrr80kkDDGiProh7sDRJJSiD//Z"
//               alt="Placeholder image"
//               className="w-full rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row justify-center items-center">
//           <div className="w-full md:w-1/2 mt-4 md:mt-0">
//             <img
//               src=""
//               alt="Placeholder image"
//               className="w-full rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );}
import React from "react";
const Navbar = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <nav className="bg-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">My Website</div>
          <div className="text-sm">
            <a
              href="#"
              className="px-4 py-2 rounded-full text-gray-700 hover:bg-gray-300"
            >
              Home
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-full text-gray-700 hover:bg-gray-300"
            >
              About
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-full text-gray-700 hover:bg-gray-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      <main className="container mx-auto py-20 flex-1">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">
          Welcome to My Website
        </h1>
        <p className="text-xl text-gray-600 mx-auto w-3/4 mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          molestie, urna a tristique fermentum, ipsum est posuere leo, eu
          sollicitudin tellus odio at odio. Aliquam erat volutpat. Vivamus
          fermentum, quam a condimentum tincidunt, purus velit porta tortor, in
          auctor enim purus eu libero.
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                molestie, urna a tristique fermentum, ipsum est posuere leo, eu
                sollicitudin tellus odio at odio.
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 font-bold text-white bg-teal-500 rounded-full"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                molestie, urna a tristique fermentum, ipsum est posuere leo, eu
                sollicitudin tellus odio at odio.
              </p>
              <a
                href="/login"
                className="inline-block px-4 py-2 font-bold text-white bg-teal-500 rounded-full"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
