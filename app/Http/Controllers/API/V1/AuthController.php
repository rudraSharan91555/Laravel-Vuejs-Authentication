<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\V1\Auth\LoginRequest;
use App\Http\Requests\API\V1\Auth\RegisterRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        try {
            $user = User::create([
                "name" => $request->name,
                "email" => $request->email,
                "password" => Hash::make($request->password),
            ]);

            event(new Registered($user));


            return response()->json([
                'message' => 'User registered successfully!',
                'user' => $user
            ], 201);

        } catch (\Exception $ex) {
            // return $ex; error check
            return response()->json([
                'error' => 'Unable to save the user record. Please refresh the webpage and try again. If the problem persists, contact the administrator.',
                'exception' => $ex->getMessage() 
            ], 500);
        }
    }

    public function login(LoginRequest $request)
    {
        
    $user = User::where('email', $request->email)->first();
 
    if (! $user || ! Hash::check($request->password, $user->password)) {

        return response()->json([
            'errors' => 'The provided credential are incorrect'
        ],401);

        // throw ValidationException::withMessages([
        //     'email' => ['The provided credentials are incorrect.'],
        // ]);
    }
 
    $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'token' => $token
        ],201);

    }

    public function checkUserStatus(){

        $status = auth()->check() ? true : false;
        return response()->json([
            'status' => $status
        ],200);
    }
}